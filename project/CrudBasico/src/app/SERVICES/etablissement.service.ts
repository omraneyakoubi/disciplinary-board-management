import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



export interface etablissement {
  id: string;
  nom: string;
  adresse: string;
  tel: string;
  email: string;
}
@Injectable({
  providedIn: 'root'
})
export class EtablissementService {
  url = 'http://localhost:3000/etablissement';

  constructor(private http: HttpClient) { }

  addetablissement(etablissement)
  {
    return this.http.post(this.url, etablissement);
  }
  alletablissement(){
    return this.http.get(this.url+'/getetab');
  }
  deleteetablissement(id:string){
    return this.http.delete(this.url+'/'+id);
  }
  editetablissement(id:string, etablissement:etablissement){
    return this.http.put(this.url+'/'+id, etablissement);
  }

  getUnetablissement(id:string){
    return this.http.get(this.url+'/'+id);
  }
}
