import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddreunionRoutingModule } from './addreunion-routing.module';
import { AddreunionComponent } from './addreunion/addreunion.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddreunionComponent
  ],
  imports: [
    CommonModule,
    AddreunionRoutingModule,
    FormsModule
  ]
})
export class AddreunionModule { }
