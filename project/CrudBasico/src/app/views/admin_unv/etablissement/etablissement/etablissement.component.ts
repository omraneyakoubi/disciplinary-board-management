import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';
import { EtablissementService, etablissement } from 'src/app/SERVICES/etablissement.service';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit {

  etablissement: etablissement = {
    id: '',
    nom: '',
    adresse: '',
    tel:'',
    email:'',  
  };
  etablisList: etablissement[] = [];
  constructor(private ds: EtablissementService, private router: Router) {}


  ngOnInit(): void {
    
    this.ds.alletablissement().subscribe((data) => { 
      console.log(data); 
      this.etablisList = data as etablissement[]; 
    });
  }
  delete(id: string,i:number) {
    if (confirm('are you sure ')) 
    this.ds.deleteetablissement(id).pipe(
      tap(() => console.log('membre eliminé')),
      catchError((err) => {
        console.log(err);
        return throwError('Une erreur est survenue lors de la suppression du sanctio,');
      })
    ).subscribe(() => {
      this.etablisList.splice(i)
    });
  }
  edit(etablissement: etablissement) {
    this.router.navigate(['/etablissement', etablissement.id]);
  }

}
