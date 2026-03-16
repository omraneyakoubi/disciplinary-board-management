import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaterunComponent } from './daterun/daterun.component';

const routes: Routes = [
  {path:'',component:DaterunComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaterunRoutingModule { }
