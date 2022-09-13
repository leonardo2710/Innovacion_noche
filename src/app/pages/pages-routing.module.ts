import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PhytonComponent } from './phyton/phyton.component';
import { NavGeneralComponent } from '../shared/nav-general/nav-general.component';

const routes:Routes=[
  {path:'dashboard', component:PagesComponent,
    children:[
      {path:'', component:DashboardComponent, data:{titulo:'Curso Phyton'}}, 
      {path:'secuenciales-phyton', component:NavGeneralComponent,data:{titulo:'Secuenciales Python'}},
      {path:'condicionales-phyton', component:NavGeneralComponent, data:{titulo:'Condicionales Python'}},
      {path:'swicht-phyton', component:NavGeneralComponent, data:{titulo:'Swicht Python'}},
      {path:'for-phyton', component:NavGeneralComponent, data:{titulo:'For Python'}},
      {path:'while-phyton', component:PhytonComponent, data:{titulo:'While Python'}}
    ]
  },
  {path:'dashboard', component:PagesComponent,
    children:[
      {path:'', component:DashboardComponent, data:{titulo:'Curso PhP'}}, 
      {path:'secuenciales-php', component:NavGeneralComponent,data:{titulo:'Secuenciales PHP'}},
      {path:'condicionales-php', component:NavGeneralComponent, data:{titulo:'Condicionales PHP'}},
      {path:'swicht-php', component:NavGeneralComponent, data:{titulo:'Swicht PHP'}},
      {path:'for-php', component:NavGeneralComponent, data:{titulo:'For PHP'}},
      {path:'while-php', component:PhytonComponent, data:{titulo:'While PHP'}}
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
