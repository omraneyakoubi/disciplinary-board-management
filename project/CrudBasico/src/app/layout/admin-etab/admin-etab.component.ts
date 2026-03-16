import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare const myfun:any;
@Component({
  selector: 'app-admin-etab',
  templateUrl: './admin-etab.component.html',
  styleUrls: ['./admin-etab.component.css'],
})
export class AdminEtabComponent {
  callfun(){
    myfun();
  }
  constructor(private router: Router) {
  
  }
  lougaout(){
    localStorage.removeItem('token')
    this.router.navigate([''])
    }

}


