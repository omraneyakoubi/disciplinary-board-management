import { Component, OnInit } from '@angular/core';
import { Membre, MembreService } from 'src/app/SERVICES/member.service';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Router } from '@angular/router';


@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {
    membre: Membre = {
    id: '',
    nom: '',
    prenom: '',
    tel:'',
    email:'',
    mdp:'',
    etablissement:'',
  
  };
  memberList: Membre[] = [];

  constructor(private ds: MembreService, private router: Router) {}

  ngOnInit(): void {
    this.ds.getMembre().subscribe((data) => { 
      console.log(data); 
      this.memberList = data as Membre[]; 
    });
  }

  eliminar(id: string) {
    this.ds.delete(id).pipe(
      tap(() => console.log('membre eliminé')),
      catchError((err) => {
        console.log(err);
        return throwError('Une erreur est survenue lors de la suppression du membre');
      })
    ).subscribe(() => {
      this.memberList = this.memberList.filter((membre: Membre) => membre.id !== id);
    });
  }
  
  edit(member: Membre) {
    this.router.navigate(['/membre', member.id]);
  }
}
