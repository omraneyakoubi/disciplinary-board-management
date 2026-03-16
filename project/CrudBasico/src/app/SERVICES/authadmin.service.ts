import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthadminService {

profiladmin={
  nom:'',
  prenom:'',
  nom_etablissement:'',
  email:'',
  mdp:'',
  role:''
}
helper=new JwtHelperService ()

isloggedin:boolean=false
  constructor(private http:HttpClient) { }
  login(data:any){
    return this.http.post('http://localhost:3000/user/login',data)
  }

  savedataprofile(token:any,nom:any,role:any){
localStorage.setItem('token',token)
localStorage.setItem('role',role)
this.profiladmin.nom=nom
this.profiladmin.role=role
this.isloggedin=true
  }
  loggedin(){
    let token:any=localStorage.getItem('token')
    if(this.helper.isTokenExpired(token)){
      return false
    }
  }
}
 