import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantsConvRoutingModule } from './etudiants-conv-routing.module';
import { EtudiantsConvComponent } from './etudiants-conv/etudiants-conv.component';


@NgModule({
  declarations: [
    EtudiantsConvComponent
  ],
  imports: [
    CommonModule,
    EtudiantsConvRoutingModule
  ]
})
export class EtudiantsConvModule { }
