import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddutilisateurRoutingModule } from './addutilisateur-routing.module';
import { AddutilisateurComponent } from './addutilisateur/addutilisateur.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddutilisateurComponent
  ],
  imports: [
    CommonModule,
    AddutilisateurRoutingModule,
    FormsModule
  ]
})
export class AddutilisateurModule { }
