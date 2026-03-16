import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface users {
  id: string;
  nom: string;
  prenom: string;
  role: string;
  email:string;
  mdp:string;
  Nom_Etablissement:string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/user';

  constructor(private http:HttpClient) {}
    getallusers() {
      return this.http.get(`http://localhost:3000/user`)
    }

    delete(id: string): Observable<any> {
      const url = `${this.url}/${id}`;
      return this.http.delete(url);
    }
    addUser(user: users): Observable<any> {
      return this.http.post(`${this.url}/add`, user);
    }
    updateuser(id,users){
      return this.http.put(`http://localhost:3000/user/`+id, users)

    }
    getunuser(id){
      return this.http.get(`http://localhost:3000/user/`,id)

    }
    sendMail(obj){
      let headers ={
        headers:new HttpHeaders({
          'Content-Type':'application/json'
        })
      }
      return this.http.post(this.url+'/mail',obj,headers);
  
    }
  
   
}
