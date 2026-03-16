import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DossiersComponent } from './dossiers/dossiers.component';

const routes: Routes = [
  {path:'',component:DossiersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DossiersRoutingModule { }
