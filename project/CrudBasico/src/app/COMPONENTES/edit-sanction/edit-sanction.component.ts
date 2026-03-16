import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SanctionService, sanction } from 'src/app/SERVICES/sanction.service';

@Component({
  selector: 'app-edit-sanction',
  templateUrl: './edit-sanction.component.html',
  styleUrls: ['./edit-sanction.component.css']
})
export class EditSanctionComponent implements OnInit {

  sanction: sanction = {
    id: '',
    nomprenom: '',
    sanction: '',
    date:'',

  
  };
  constructor(private ds:SanctionService,
    private router:Router,
    private activeRoute:ActivatedRoute) { }


  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
        if (id) {
          this.ds.getUnsanction(id).subscribe((sanction: sanction) => {
            this.sanction = sanction;
            console.log("test",sanction)
          });
        }
  }
  modifiersanction() {
    this.ds.editsanction(this.sanction.id, this.sanction).subscribe(() => {
      console.log('Membre modifié avec succès');
    });
  }

}
