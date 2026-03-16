import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Membre, MembreService } from 'src/app/SERVICES/member.service';



@Component({
  selector: 'app-modifiermbr',
  templateUrl: './modifiermbr.component.html',
  styleUrls: ['./modifiermbr.component.css']
})
export class ModifiermbrComponent implements OnInit {
  membre: Membre = {
    id: '',
    nom: '',
    prenom: '',
    tel:'',
    email:'',
    mdp:'',
    etablissement:'',
  
  };
  constructor(private ds:MembreService,
    private router:Router,
    private activeRoute:ActivatedRoute) { }

    ngOnInit(): void {
        const id = this.activeRoute.snapshot.paramMap.get('id');
        if (id) {
          this.ds.getUnmembre(id).subscribe((membre: Membre) => {
            this.membre = membre;
            console.log("test",membre)
          });
        }
      }
    
      modifierMembre() {
        this.ds.editmembre(this.membre.id, this.membre).subscribe(() => {
          console.log('Membre modifié avec succès');
        });
      }
    
  



    }


