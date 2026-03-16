import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {}

  register(username: string, email: string, password: string, role: string): Observable<any> {
    const data = { username, email, password, role };
    return this.http.post(`${this.apiUrl}/register`, data).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
      })
    );
  }

  login(username: string, password: string): Observable<any> {
    const data = { username, password };
    return this.http.post(`${this.apiUrl}/login`, data).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token !== null;
  }
}
  