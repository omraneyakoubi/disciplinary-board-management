import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface sanction {
  id: string;
  nomprenom: string;
  sanction: string;
  date: string;
}
@Injectable({
  providedIn: 'root'
})
export class SanctionService {
  url = 'http://localhost:3000/sanction';

  constructor(private http: HttpClient) { }


  addsanction(sanction)
  {
    return this.http.post(this.url, sanction);
  }
  allsanction(){
    return this.http.get(this.url+'/getsanc');
  }
  deletesanction(id:string){
    return this.http.delete(this.url+'/'+id);
  }
  editsanction(id:string, sanction:sanction){
    return this.http.put(this.url+'/'+id, sanction);
  }
  getUnsanction(id:string){
    return this.http.get(this.url+'/'+id);
  }
}
