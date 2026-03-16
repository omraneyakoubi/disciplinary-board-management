import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddetablissementRoutingModule } from './addetablissement-routing.module';
import { AddetablissementComponent } from './addetablissement/addetablissement.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddetablissementComponent
  ],
  imports: [
    CommonModule,
    AddetablissementRoutingModule,
    FormsModule
  ]
})
export class AddetablissementModule { }
