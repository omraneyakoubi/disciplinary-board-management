import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, users } from 'src/app/SERVICES/user.service';

@Component({
  selector: 'app-addutilisateur',
  templateUrl: './addutilisateur.component.html',
  styleUrls: ['./addutilisateur.component.css']
})
export class AddutilisateurComponent implements OnInit {
  user = {
    id: '',
    nom: '',
    prenom: '',
    role: '',
    email: '',
    mdp: '',
    Nom_Etablissement: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.generateRandomPassword();
  }

  

  resetForm() {
    this.user = {
      id: '',
      nom: '',
      prenom: '',
      role: '',
      email: '',
      mdp: '',
      Nom_Etablissement: ''
    };
  }

  generateRandomPassword() {
    const length = 10;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
    this.user.mdp = password;
  }
  addUser() {
    let objetud={
      email:"",
      mdp:""
    }
    this.userService.addUser(this.user)
      .subscribe(
        response => {
          objetud.email=this.user.email
          objetud.mdp=this.user.mdp
          
          console.log('salem',objetud.mdp);
          
          this.sendmail(objetud)
          console.log('User added successfully:', response);
          this.resetForm();
          this.router.navigate(['adminuniv/users']);
        },
        error => {
          console.error('Error adding user:', error);
        }
      );
  }
  sendmail(mail) {
    let obj = mail
    let reqObj = {
      email: obj.email,
      mdp:  obj.mdp
    }
    this.userService.sendMail(reqObj).subscribe(data => {
      console.log(data);

    })
  }
}
