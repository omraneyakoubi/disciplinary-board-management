import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './COMPONENTES/agregar/agregar.component';

import { InicioComponent } from './COMPONENTES/inicio/inicio.component';
import { AdminEtabComponent } from './layout/admin-etab/admin-etab.component';
import { LoginComponent } from './views/front/login/login/login.component';
import { FrontComponent } from './layout/front/front.component';
import { ModifiermbrComponent } from './COMPONENTES/modifiermbr/modifiermbr.component';
import { AdminUnivComponent } from './layout/admin-univ/admin-univ.component';
import { AdminMembreComponent } from './layout/admin-membre/admin-membre.component';
import { ModifieruserComponent } from './COMPONENTES/modifieruser/modifieruser.component';
import { EditReunionComponent } from './COMPONENTES/edit-reunion/edit-reunion.component';
import { EditSanctionComponent } from './COMPONENTES/edit-sanction/edit-sanction.component';
import { EditEtablissementComponent } from './COMPONENTES/edit-etablissement/edit-etablissement.component';

const routes: Routes = [
  {path:'inicio' , component: InicioComponent},
  {path:'add', component:AgregarComponent},
  {path:'membre/:id', component:ModifiermbrComponent},
  {path:'user/:id', component:ModifieruserComponent},
  {path:'editruen/:id', component:EditReunionComponent},
  {path:'sanction/:id', component:EditSanctionComponent},
  {path:'etablissement/:id', component:EditEtablissementComponent},
  

{path:'',component:FrontComponent,children:[

  {path:'',loadChildren:()=>import('./views/front/login/login.module').then(m=>m.LoginModule)},


]},

  {path:'admin', component:AdminEtabComponent,children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'reunion',loadChildren:()=>import('./views/admin/reunion/reunion.module').then(m=>m.ReunionModule)},
    {path:'dossiers',loadChildren:()=>import('./views/admin/dossiers/dossiers.module').then(m=>m.DossiersModule)},
    {path:'etudiants_conv',loadChildren:()=>import('./views/admin/etudiants-conv/etudiants-conv.module').then(m=>m.EtudiantsConvModule)},
    {path:'echange',loadChildren:()=>import('./views/admin/echange/echange.module').then(m=>m.EchangeModule)},
    {path:'contact',loadChildren:()=>import('./views/admin/contact/contact.module').then(m=>m.ContactModule)},
    {path:'sanction',loadChildren:()=>import('./views/admin/sanction/sanction.module').then(m=>m.SanctionModule)},
    {path:'addsanction',loadChildren:()=>import('./views/admin/addsanction/addsanction.module').then(m=>m.AddsanctionModule)},
    {path:'addreunion',loadChildren:()=>import('./views/admin/addreunion/addreunion.module').then(m=>m.AddreunionModule)},
    {path:'addmembre',loadChildren:()=>import('./views/admin/addmembre/addmembre.module').then(m=>m.AddmembreModule)},
    {path:'membre',loadChildren:()=>import('./views/admin/membre/membre.module').then(m=>m.MembreModule)},
    {path:'daterun',loadChildren:()=>import('./views/admin/daterun/daterun.module').then(m=>m.DaterunModule)},
    {path:'views/:id',loadChildren:()=>import('./views/admin/viewsetuds/viewsetuds.module').then(m=>m.ViewsetudsModule)},
    

  ]},
  {path:'adminuniv', component:AdminUnivComponent,children:[
    {path:'reunion',loadChildren:()=>import('./views/admin/reunion/reunion.module').then(m=>m.ReunionModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'users',loadChildren:()=>import('./views/admin_unv/users/users.module').then(m=>m.UsersModule)},
    {path:'echange',loadChildren:()=>import('./views/admin/echange/echange.module').then(m=>m.EchangeModule)},
    {path:'addutilisateur',loadChildren:()=>import('./views/admin_unv/addutilisateur/addutilisateur.module').then(m=>m.AddutilisateurModule)},
    {path:'etablissement',loadChildren:()=>import('./views/admin_unv/etablissement/etablissement.module').then(m=>m.EtablissementModule)},
    {path:'addetablissement',loadChildren:()=>import('./views/admin_unv/addetablissement/addetablissement.module').then(m=>m.AddetablissementModule)},



  ]},
  {path:'adminmembre', component:AdminMembreComponent,children:[
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},

    {path:'reunion',loadChildren:()=>import('./views/admin/reunion/reunion.module').then(m=>m.ReunionModule)},



  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
