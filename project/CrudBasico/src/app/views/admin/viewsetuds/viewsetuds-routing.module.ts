import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsetudsComponent } from './viewsetuds/viewsetuds.component';

const routes: Routes = [
  {path:'',component:ViewsetudsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsetudsRoutingModule { }
