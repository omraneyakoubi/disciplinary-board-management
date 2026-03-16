import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { DaterunRoutingModule } from './daterun-routing.module';
import { DaterunComponent } from './daterun/daterun.component';


@NgModule({
  declarations: [
    DaterunComponent
  ],
  imports: [
    CommonModule,
    DaterunRoutingModule,
    FormsModule
  ]
})
export class DaterunModule { }
