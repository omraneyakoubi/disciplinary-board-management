import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembreRoutingModule } from './membre-routing.module';
import { MembreComponent } from './membre/membre.component';


@NgModule({
  declarations: [
    MembreComponent
  ],
  imports: [
    CommonModule,
    MembreRoutingModule
    
  ]
})
export class MembreModule { }
