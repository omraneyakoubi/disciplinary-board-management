import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReunionRoutingModule } from './reunion-routing.module';
import { ReunionComponent } from './reunion/reunion.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReunionComponent
  ],
  imports: [
    CommonModule,
    ReunionRoutingModule,
    FormsModule
   
  ]
})
export class ReunionModule { }
