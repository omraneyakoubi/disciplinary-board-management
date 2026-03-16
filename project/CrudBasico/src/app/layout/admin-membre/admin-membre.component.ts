import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/SERVICES/authadmin.service';
declare const myfun:any;

@Component({
  selector: 'app-admin-membre',
  templateUrl: './admin-membre.component.html',
  styleUrls: ['./admin-membre.component.css']
})
export class AdminMembreComponent implements OnInit{
  callfun(){
    myfun();
  }
  constructor(private ads: AuthadminService,private router: Router) {
    if(this.ads.loggedin()==false){
      console.log("jwk bhi")
    }else {
      console.log("not connected ");
      
    }
  
  }
  ngOnInit(): void {
    let token=localStorage.getItem('token')
    let role=localStorage.getItem('role')
    if (token) {
      if (role=== 'etablissement') {
        this.router.navigate(['/admin']);
      } else if (role === 'université') {
        this.router.navigate(['/adminuniv']);

      } else  if (role === 'membre') {
        this.router.navigate(['/adminmembre']);

      }
     

      
    }else {
      this.router.navigate(['']);

    }
   
  }
  lougaout(){
    localStorage.removeItem('token')
    this.router.navigate([''])
    }

}
