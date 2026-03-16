import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EchangeComponent } from './echange/echange.component';

const routes: Routes = [
  {path:'',component:EchangeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EchangeRoutingModule { }
