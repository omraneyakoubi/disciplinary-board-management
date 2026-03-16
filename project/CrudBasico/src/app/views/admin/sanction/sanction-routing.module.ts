import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanctionComponent } from './sanction/sanction.component';

const routes: Routes = [
  {path:'',component:SanctionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanctionRoutingModule { }
