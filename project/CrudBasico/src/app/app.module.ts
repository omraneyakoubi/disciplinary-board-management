import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './COMPONENTES/inicio/inicio.component';
import { AgregarComponent } from './COMPONENTES/agregar/agregar.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { LayoutModule } from './layout/layout.module';
import { ModifiermbrComponent } from './COMPONENTES/modifiermbr/modifiermbr.component';
import { ModifieruserComponent } from './COMPONENTES/modifieruser/modifieruser.component';
import { EditReunionComponent } from './COMPONENTES/edit-reunion/edit-reunion.component';
import { EditSanctionComponent } from './COMPONENTES/edit-sanction/edit-sanction.component';
import { EditEtablissementComponent } from './COMPONENTES/edit-etablissement/edit-etablissement.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AgregarComponent,
    ModifiermbrComponent,
    ModifieruserComponent,
    EditReunionComponent,
    EditSanctionComponent,
    EditEtablissementComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
