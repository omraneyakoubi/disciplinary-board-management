import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanctionRoutingModule } from './sanction-routing.module';
import { SanctionComponent } from './sanction/sanction.component';


@NgModule({
  declarations: [
    SanctionComponent
  ],
  imports: [
    CommonModule,
    SanctionRoutingModule
  ]
})
export class SanctionModule { }
