import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddutilisateurComponent } from './addutilisateur/addutilisateur.component';

const routes: Routes = [
  {path:'',component:AddutilisateurComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddutilisateurRoutingModule { }
