import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SanctionService, sanction } from 'src/app/SERVICES/sanction.service';


@Component({
  selector: 'app-sanction',
  templateUrl: './sanction.component.html',
  styleUrls: ['./sanction.component.css']
})
export class SanctionComponent implements OnInit {

  sanction: sanction = {
    id: '',
    nomprenom: '',
    sanction: '',
    date:'',

  
  };
  sanctionList: sanction[] = [];
  constructor(private ds: SanctionService, private router: Router) {}


  ngOnInit(): void {
    
    this.ds.allsanction().subscribe((data) => { 
      console.log(data); 
      this.sanctionList = data as sanction[]; 
    });
  }
  delete(id: string,i:number) {
    if (confirm('are you sure ')) 
    this.ds.deletesanction(id).pipe(
      tap(() => console.log('membre eliminé')),
      catchError((err) => {
        console.log(err);
        return throwError('Une erreur est survenue lors de la suppression du sanctio,');
      })
    ).subscribe(() => {
      this.sanctionList.splice(i)
    });
  }
  edit(sanction: sanction) {
    this.router.navigate(['/sanction', sanction.id]);
  }

}
