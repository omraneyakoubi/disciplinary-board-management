import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddetablissementComponent } from './addetablissement/addetablissement.component';

const routes: Routes = [
  {path:'',component:AddetablissementComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddetablissementRoutingModule { }
