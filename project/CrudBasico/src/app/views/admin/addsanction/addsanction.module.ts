import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddsanctionRoutingModule } from './addsanction-routing.module';
import { AddsanctionComponent } from './addsanction/addsanction.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddsanctionComponent
  ],
  imports: [
    CommonModule,
    AddsanctionRoutingModule,
    FormsModule
  ]
})
export class AddsanctionModule { }
