import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminEtabComponent } from './admin-etab/admin-etab.component';
import { AppRoutingModule } from '../app-routing.module';
import { FrontComponent } from './front/front.component';
import { AdminUnivComponent } from './admin-univ/admin-univ.component';
import { AdminMembreComponent } from './admin-membre/admin-membre.component';



@NgModule({
  declarations: [
    AdminEtabComponent,
    FrontComponent,
    AdminUnivComponent,
    AdminMembreComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class LayoutModule { }
