import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo, EquipoService } from 'src/app/SERVICES/equipo.service';

@Component({
  selector: 'app-addreunion',
  templateUrl: './addreunion.component.html',
  styleUrls: ['./addreunion.component.css']
})
export class AddreunionComponent implements OnInit {
  equipo: any = {
    id_equipo: '',
    date: '',
    emplacement: '',
  };
  step1 = true;
  erreurdate = false;
  existe = false;
  step2 = false;
  error2 = false
  tab: any = [];
  btnInfo = "ajouter étudiant"
  tabetud: any = [];
  etudiant: any = {
    cin: '',
    nomprenom: '',
    genre: '',
    email: '',
    numtel: '',
    nivetud: '',
    classe: '',
    objet: '',
    rapport: '',
    quest: '',
    conv: '',
    id_equipo: '',


  }
  constructor(private equipoService: EquipoService, private router: Router) { }

  ngOnInit(): void { }
  agregar() {
    if (this.tabetud.length) {
      delete this.equipo.id_equipo;
      let objetud={
        email:"",
        date:""
      }
      for (let i = 0; i < this.tabetud.length; i++) {
        this.equipoService.addetudiant(this.tabetud[i]).subscribe();
        console.log(this.tabetud[i])
        objetud.email=this.tabetud[i].email
        objetud.date=this.equipo.date
        this.sendmail(objetud)

      }
      console.log(this.equipo)
      this.router.navigate(['/admin/reunion']);

    } else {
      this.error2 = true
    }
  }
  step1fn() {
    this.step1 = true;
    this.erreurdate = false;
    this.existe = false;
    this.step2 = false;
    this.equipoService.getEquipos().subscribe(
      res => {
        this.tab = res;
        console.log(this.equipo.date);
        for (let index = 0; index < this.tab.length; index++) {
          if (this.tab[index].date == this.equipo.date) {
            this.existe = true;

          }

        }
        if (this.existe == true) {
          this.erreurdate = true;

        } else {
          this.equipoService.addEquipo(this.equipo).subscribe();

          this.step1 = false;
          this.step2 = true;
        }

      },
      err => console.log(err)
    );
    console.log("for", this.tab);




  }

  addetud() {

    this.equipoService.getEquipos().subscribe(
      res => {
        this.tab = res;
        console.log(this.equipo.date);
        for (let index = 0; index < this.tab.length; index++) {
          if (this.tab[index].date == this.equipo.date) {
            this.etudiant.id_equipo = this.tab[index].id_equipo
            this.tabetud.push(this.etudiant)
            this.etudiant = {
              cin: '',
              nomprenom: '',
              genre: '',
              email: '',
              numtel: '',
              nivetud: '',
              classe: '',
              objet: '',
              rapport: '',
              quest: '',
              conv: '',
              id_equipo: '',
            }
            this.btnInfo = "ajouter autre"
            console.log(this.tabetud);



          }

        }

      },
      err => console.log(err)
    );


  }
  sendmail(mail) {
    let obj = mail
    let reqObj = {
      email: obj.email,
      date:  obj.date
    }
    this.equipoService.sendMail(reqObj).subscribe(data => {
      console.log(data);

    })
  }
}
