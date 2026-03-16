import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsetudsRoutingModule } from './viewsetuds-routing.module';
import { ViewsetudsComponent } from './viewsetuds/viewsetuds.component';


@NgModule({
  declarations: [
    ViewsetudsComponent
  ],
  imports: [
    CommonModule,
    ViewsetudsRoutingModule
  ]
})
export class ViewsetudsModule { }
