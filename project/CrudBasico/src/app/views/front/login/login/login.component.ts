import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/SERVICES/authadmin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  datarecived: any;
  error: string = '';

  constructor(private ads: AuthadminService, private router: Router) {
    if(this.ads.loggedin()==true){
      console.log("connected")
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
     

      
    }
   }

  loginadmin(f: any) {
    let data = f.value

    this.ads.login(data).subscribe(
      Response => {
        this.datarecived = Response;
        this.ads.savedataprofile(this.datarecived.token, this.datarecived.nom, this.datarecived.role);

        if (this.ads.profiladmin.role === 'etablissement') {
          this.router.navigate(['/admin']);
        } else if (this.ads.profiladmin.role === 'université') {
          this.router.navigate(['/adminuniv']);

        } else{
          this.router.navigate(['/adminmembre']);

        }

      },
      err => {
        console.log(err);
        this.error = 'Email ou mot de passe incorrect';
      }
    );
  }

}
