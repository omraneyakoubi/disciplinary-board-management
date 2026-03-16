import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DossiersRoutingModule } from './dossiers-routing.module';
import { DossiersComponent } from './dossiers/dossiers.component';


@NgModule({
  declarations: [
    DossiersComponent
  ],
  imports: [
    CommonModule,
    DossiersRoutingModule
  ]
})
export class DossiersModule { }
