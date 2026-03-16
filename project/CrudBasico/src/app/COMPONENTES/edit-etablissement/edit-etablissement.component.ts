import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtablissementService, etablissement } from 'src/app/SERVICES/etablissement.service';

@Component({
  selector: 'app-edit-etablissement',
  templateUrl: './edit-etablissement.component.html',
  styleUrls: ['./edit-etablissement.component.css']
})
export class EditEtablissementComponent implements OnInit{
  etablissement: etablissement = {
    id: '',
    nom: '',
    adresse: '',
    tel:'',
    email:'',  
  };
  constructor(private ds:EtablissementService,
    private router:Router,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id) {
      this.ds.getUnetablissement(id).subscribe((etablissement: etablissement) => {
        this.etablissement = etablissement;
        console.log("test",etablissement)
      });
    }
  }
  modifieretablissement() {
    this.ds.editetablissement(this.etablissement.id, this.etablissement).subscribe(() => {
      console.log('etablissement  modifié avec succès');
    });
  }

}
