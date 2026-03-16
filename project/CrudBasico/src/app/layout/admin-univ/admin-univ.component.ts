import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-univ',
  templateUrl: './admin-univ.component.html',
  styleUrls: ['./admin-univ.component.css']
})
export class AdminUnivComponent implements OnInit {
  constructor(private router: Router) {
  
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
