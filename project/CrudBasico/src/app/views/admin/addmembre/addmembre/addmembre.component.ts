import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Membre, MembreService } from 'src/app/SERVICES/member.service';

@Component({
  selector: 'app-addmembre',
  templateUrl: './addmembre.component.html',
  styleUrls: ['./addmembre.component.css']
})
export class AddMemberComponent implements OnInit {
  membre: Membre = {
    id: '',
    nom: '',
    prenom: '',
    tel:'',
    email:'',
    mdp:'',
    etablissement:'',
  
  };
  
  constructor(private ds: MembreService, private router: Router) { }

  ngOnInit(): void {
  }
  agregar() {
    delete this.membre.id;

    this.ds.addmembre(this.membre).subscribe();
    this.router.navigate(['/admin/membre']);
  }
}
