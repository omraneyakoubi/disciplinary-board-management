import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtablissementService, etablissement } from 'src/app/SERVICES/etablissement.service';

@Component({
  selector: 'app-addetablissement',
  templateUrl: './addetablissement.component.html',
  styleUrls: ['./addetablissement.component.css']
})
export class AddetablissementComponent implements OnInit{
  etablissement: etablissement = {
    id: '',
    nom: '',
    adresse: '',
    tel:'',
    email:'',  
  };
  constructor(private ds: EtablissementService, private router: Router) { }
  ngOnInit(): void {}
  agregar() {
    

    this.ds.addetablissement(this.etablissement).subscribe();
    this.router.navigate(['/admin/etablissement']);
  }


}
