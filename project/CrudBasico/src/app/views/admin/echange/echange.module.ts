import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EchangeRoutingModule } from './echange-routing.module';
import { EchangeComponent } from './echange/echange.component';


@NgModule({
  declarations: [
    EchangeComponent
  ],
  imports: [
    CommonModule,
    EchangeRoutingModule
  ]
})
export class EchangeModule { }
