import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddreunionComponent } from './addreunion/addreunion.component';

const routes: Routes = [
  {path:"",component:AddreunionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddreunionRoutingModule { }
