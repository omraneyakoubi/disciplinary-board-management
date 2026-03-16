import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import { UserService, users } from 'src/app/SERVICES/user.service';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users: users = {
    id: '',
    nom: '',
    prenom: '',
    role: '',
    email: '',
    mdp: '',
    Nom_Etablissement: '',

  };
  id = "";
  userid=""
  dataarray: any=[];
  datausers:any={}

  constructor(private userService: UserService, private router: Router) {
    this.dataarray = [];

  }

  ngOnInit(): void {
    this.userService.getallusers().subscribe(
      (data: any) => {
        this.dataarray = data.data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
 

  deleteUser(id: string) {
    this.userService.delete(id).pipe(
      tap(() => console.log('User deleted')),
      catchError((err) => {
        console.log(err);
        return throwError('An error occurred while deleting the user');
      })
    ).subscribe(() => {
      this.dataarray = this.dataarray.filter((item: users) => item.id !== id);
    });
  }
  getuserbyid(){

  }
  getuser(id) {
    this.userid = id;
    this.userService.getunuser(this.userid).subscribe(res=>{
      this.datausers= res
      console.log("res",res);
      console.log("sallem",this.datausers);
      
    })
   
   
  }
  update() {
 
    this.userService.updateuser(this.userid, this.datausers).subscribe(res => { alert("user edited with success") })
  }

 
 

}
