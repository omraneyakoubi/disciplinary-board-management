import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantsConvComponent } from './etudiants-conv/etudiants-conv.component';

const routes: Routes = [
  {path:'',component:EtudiantsConvComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantsConvRoutingModule { }
