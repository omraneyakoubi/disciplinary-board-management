import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo, EquipoService } from 'src/app/SERVICES/equipo.service';

@Component({
  selector: 'app-edit-reunion',
  templateUrl: './edit-reunion.component.html',
  styleUrls: ['./edit-reunion.component.css']
})
export class EditReunionComponent implements OnInit {
  objetud:any = {
    id: "",
    date: "",
    emplacement: ""

  }
  tab: any = [];
  id = "";

  existe = false
  erreurdate = false
  constructor(private equipoService: EquipoService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.equipoService.getEquipos().subscribe(
      res => {
      
        this.tab = res;
        


      })
      this.equipoService.getUnEquipo(this.id).subscribe(res=>{
        this.objetud=res[0];
        console.log("test",res)
      })
    //  for (let index = 0; index < this.tab.length; index++) {
    //     if (this.tab[index].id == this.id) {
    //       this.objetud = this.tab[index]
    //       console.log("test",this.objetud)
    //       break
    //     }
    //   }
  }
  sendmail(mail) {
    let obj = mail
    let reqObj = {
      email: obj.email,
      date: obj.date
    }
    this.equipoService.sendMail(reqObj).subscribe(data => {
      console.log(data);

    })
  }
  edit() {
    this.existe = false
    for (let index = 0; index < this.tab.length; index++) {
      if (this.tab[index].date == this.objetud.date) {
        this.existe = true;

      }

    }
    if (this.existe == true) {
      this.erreurdate = true;

    } else {
      this.equipoService.editruen(this.id, this.objetud).subscribe(res => { alert("reunion edited with success") })
      this.router.navigate(["/admin/reunion"])

    }
  }
}
