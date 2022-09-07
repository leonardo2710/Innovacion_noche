import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PhytonComponent } from './phyton/phyton.component';

const routes:Routes=[
  {path:'dashboard', component:PagesComponent,
  children:[
    {path:'', component:DashboardComponent, data:{titulo:'Curso Phyton'}}, 
    {path:'secuenciales-phyton', component:UsuariosComponent,data:{titulo:'Secuenciales'}},
    {path:'condicionales-phyton', component:PhytonComponent, data:{titulo:'Condicionales'}},
    {path:'swicht-phyton', component:PhytonComponent, data:{titulo:'Swicht'}},
    {path:'for-phyton', component:PhytonComponent, data:{titulo:'For'}}
    
  ]
},
{path:'dashboard', component:PagesComponent,
  children:[
    {path:'', component:DashboardComponent, data:{titulo:'Curso PhP'}}, 
    {path:'secuenciales-php', component:UsuariosComponent,data:{titulo:'Secuenciales'}},
    {path:'condicionales-php', component:PhytonComponent, data:{titulo:'Condicionales'}},
    {path:'swicht-php', component:PhytonComponent, data:{titulo:'Swicht'}},
    {path:'for-php', component:PhytonComponent, data:{titulo:'For'}}
  ]
}


]



@NgModule({
 
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
