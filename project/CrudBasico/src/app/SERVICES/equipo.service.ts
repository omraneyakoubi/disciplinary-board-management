import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Equipo {
  id_equipo: string;
  date: string;
  emplacement:string;
}
export interface etudconv {
  id: string;
  nomprenom: string;
  cin:string;
  genre:string;
  email:string;
  numtel:string;
  nivetud:string;
  classe:string;
  objet:string;
  rapport:string;
  quest:string;
  conv:string;
  id_equipo :any;
}



@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  url='/api';
  agregarEquipo: any;
  eliminarEquipo: any;
  getEquipo: any;
  agregarMembreDeConseil: any;
  constructor(private http: HttpClient) { }
  //get equipos
  getEquipos()
  {
    return this.http.get(this.url);
  }
//ajouter etudiants
  addetudiant(etudiant){
    return this.http.post(this.url+'/addetud',etudiant);

  }
  //get un Equipo
  getUnEquipo(id:string){
    return this.http.get(this.url+'/'+id);
  }
  getunetud(id:string){
    return this.http.get(this.url+'/etud/'+id);
  }
  getdate(date){
    return this.http.get<{reunion: any}>
(this.url+'/reunion',date);
  }
  //agregar equipo
  addEquipo(equipo:Equipo)
  {
    return this.http.post(this.url, equipo);
  }
  //eliminar
  deleteEquipo(id:string){
    return this.http.delete(this.url+'/'+id);
  }
  //modificar equipo
  editruen(id,equipo){
    return this.http.put(this.url+'/edit/'+id, equipo);
  }

  deleteetud(id:string){
    return this.http.delete(this.url+'/etud/'+id);
  }
 
  sendMail(obj){
    let headers ={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post(this.url+'/mailer',obj,headers);

  }
  getalletud(){
   
    return this.http.get(this.url+'/etudiant');
  
  }

}



