import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface Membre {
  id: string;
  nom: string;
  prenom: string;
  tel: string;
  email:string;
  mdp:string;
  etablissement:string;
}

@Injectable({
  providedIn: 'root'
})
export class MembreService {
  url = 'http://localhost:3000/member';

  constructor(private http: HttpClient) {}

  getMembre(): Observable<Membre[]> {
    return this.http.get<Membre[]>(`${this.url}/getmbr`);
  }

  delete(id: string): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }

  //agregar equipo
  addmembre(membre:Membre)
  {
    return this.http.post(this.url, membre);
  }
  //get un Equipo
  getUnmembre(id:string){
    return this.http.get(this.url+'/'+id);
  }
  //modificar equipo
  editmembre(id:string, membre:Membre){
    return this.http.put(this.url+'/'+id, membre);
  }
}
