import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo, EquipoService } from 'src/app/SERVICES/equipo.service';

@Component({
  selector: 'app-daterun',
  templateUrl: './daterun.component.html',
  styleUrls: ['./daterun.component.css']
})
export class DaterunComponent implements OnInit {
  step:any=1;


  equipo: Equipo = {
    id_equipo: null,
    date: '',
    emplacement:'',
  };

  constructor(private equipoService: EquipoService, private router: Router) {}

  ngOnInit() {

  }
  agregar() {
    delete this.equipo.id_equipo;

    this.equipoService.addEquipo(this.equipo).subscribe();
    this.router.navigate(['/admin/addreunion']);
  }
  submit(){
    this.step=this.step+1;
  }
  previous(){
    this.step=this.step-1;

  }
}