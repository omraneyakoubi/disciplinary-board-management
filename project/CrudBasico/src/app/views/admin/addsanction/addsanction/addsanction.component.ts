import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SanctionService, sanction } from 'src/app/SERVICES/sanction.service';

@Component({
  selector: 'app-addsanction',
  templateUrl: './addsanction.component.html',
  styleUrls: ['./addsanction.component.css']
})
export class AddsanctionComponent implements OnInit {

  sanction: sanction = {
    id: '',
    nomprenom: '',
    sanction: '',
    date:'',

  
  };
  constructor(private ds: SanctionService, private router: Router) { }
  ngOnInit(): void {}

  agregar() {
    

    this.ds.addsanction(this.sanction).subscribe();
    this.router.navigate(['/admin/sanction']);
  }


}
