import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddsanctionComponent } from './addsanction/addsanction.component';

const routes: Routes = [
  {path:"",component:AddsanctionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddsanctionRoutingModule { }
