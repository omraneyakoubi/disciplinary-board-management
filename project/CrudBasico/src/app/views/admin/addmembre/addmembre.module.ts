import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddmembreRoutingModule } from './addmembre-routing.module';
import { AddMemberComponent } from 'src/app/views/admin/addmembre/addmembre/addmembre.component'; // Import your component here


@NgModule({
  declarations: [
    AddMemberComponent // Add your component to the declarations array
  ],
  imports: [
    CommonModule,
    AddmembreRoutingModule,
    FormsModule,
    FormsModule 
  ],
  exports: [
    AddMemberComponent // Export your component
  ]
})
export class AddmembreModule { }
