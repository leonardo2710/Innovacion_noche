import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PhytonComponent } from './phyton/phyton.component';
import { NavGeneralComponent } from '../shared/nav-general/nav-general.component';
import { AuthGuard } from '../services/auth.guard';

const routes:Routes=[
  {path:'dashboard', component:PagesComponent,canActivate: [AuthGuard],
    children:[
      {path:'', component:DashboardComponent, data:{titulo:' Curso Phyton'},canActivate: [AuthGuard]}, 
      {path:'secuenciales-phyton', component:NavGeneralComponent,data:{titulo:'Secuenciales Python'},canActivate: [AuthGuard]},
      {path:'condicionales-phyton', component:NavGeneralComponent, data:{titulo:'Condicionales Python'},canActivate: [AuthGuard]},
      {path:'swicht-phyton', component:NavGeneralComponent, data:{titulo:'Swicht Python'},canActivate: [AuthGuard]},
      {path:'for-phyton', component:NavGeneralComponent, data:{titulo:'For Python'},canActivate: [AuthGuard]},
      {path:'while-phyton', component:PhytonComponent, data:{titulo:'While Python'},canActivate: [AuthGuard]},
      {path:'secuenciales-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'secuenciales-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'condicionales-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'condicionales-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'swicht-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'swicht-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'for-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'for-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'while-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'while-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}}
    ]
  },
  {path:'dashboard', component:PagesComponent,canActivate: [AuthGuard],
    children:[
      {path:'', component:DashboardComponent, data:{titulo:'Curso PhP'},canActivate: [AuthGuard]}, 
      {path:'secuenciales-php', component:NavGeneralComponent,data:{titulo:'Secuenciales PHP'},canActivate: [AuthGuard]},
      {path:'condicionales-php', component:NavGeneralComponent, data:{titulo:'Condicionales PHP'},canActivate: [AuthGuard]},
      {path:'swicht-php', component:NavGeneralComponent, data:{titulo:'Swicht PHP'},canActivate: [AuthGuard]},
      {path:'for-php', component:NavGeneralComponent, data:{titulo:'For PHP'},canActivate: [AuthGuard]},
      {path:'while-php', component:PhytonComponent, data:{titulo:'While PHP'},canActivate: [AuthGuard]},
      {path:'secuenciales-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'secuenciales-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'condicionales-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'condicionales-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'swicht-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'swicht-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'for-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'for-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'while-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'while-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}}
    ]
  },
  {path:'dashboard', component:PagesComponent,canActivate: [AuthGuard],
    children:[
      {path:'', component:DashboardComponent, data:{titulo:'Curso Javascript'},canActivate: [AuthGuard]}, 
      {path:'secuenciales-javascript', component:NavGeneralComponent,data:{titulo:'Secuenciales Javascript'},canActivate: [AuthGuard]},
      {path:'condicionales-javascript', component:NavGeneralComponent, data:{titulo:'Condicionales Javascript'},canActivate: [AuthGuard]},
      {path:'swicht-javascript', component:NavGeneralComponent, data:{titulo:'Swicht Javascript'},canActivate: [AuthGuard]},
      {path:'for-javascript', component:NavGeneralComponent, data:{titulo:'For Javascript'},canActivate: [AuthGuard]},
      {path:'while-javascript', component:PhytonComponent, data:{titulo:'While Javascript'},canActivate: [AuthGuard]},
      {path:'secuenciales-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'secuenciales-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'condicionales-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'condicionales-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'swicht-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'swicht-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'for-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'for-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'while-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'while-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}}
    ]
  },
  
  {path:'dashboard', component:PagesComponent,canActivate: [AuthGuard],
    children:[
      {path:'', component:DashboardComponent, data:{titulo:'Curso Java'},canActivate: [AuthGuard]}, 
      {path:'secuenciales-java', component:NavGeneralComponent,data:{titulo:'Secuenciales Java'},canActivate: [AuthGuard]},
      {path:'secuenciales-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'secuenciales-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'condicionales-java', component:NavGeneralComponent, data:{titulo:'Condicionales Java'},canActivate: [AuthGuard]},
      {path:'condicionales-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'condicionales-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'swicht-java', component:NavGeneralComponent, data:{titulo:'Swicht Java'},canActivate: [AuthGuard]},
      {path:'swicht-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'swicht-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'for-java', component:NavGeneralComponent, data:{titulo:'For Java'},canActivate: [AuthGuard]},
      {path:'for-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'for-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'while-java', component:PhytonComponent, data:{titulo:'While Java'},canActivate: [AuthGuard]},
      {path:'while-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'while-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}}
    ]
  },
  {path:'dashboard', component:PagesComponent,canActivate: [AuthGuard],
    children:[
      {path:'', component:DashboardComponent, data:{titulo:'Curso Pseint'},canActivate: [AuthGuard]}, 
      {path:'secuenciales-pseint', component:NavGeneralComponent,data:{titulo:'Secuenciales pseint'},canActivate: [AuthGuard]},
      {path:'secuenciales-pseint', component:NavGeneralComponent,data:{titulo:'Secuenciales pseint'}},
      {path:'secuenciales-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'secuenciales-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'condicionales-pseint', component:NavGeneralComponent, data:{titulo:'Condicionales pseint'}},
      {path:'condicionales-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'condicionales-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'condicionales-pseint', component:NavGeneralComponent, data:{titulo:'Condicionales pseint'},canActivate: [AuthGuard]},
      {path:'swicht-pseint', component:NavGeneralComponent, data:{titulo:'Swicht pseint'},canActivate: [AuthGuard]},
      {path:'swicht-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'swicht-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'for-pseint', component:NavGeneralComponent, data:{titulo:'For pseint'},canActivate: [AuthGuard]},
      {path:'for-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'for-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'while-pseint', component:PhytonComponent, data:{titulo:'While pseint'},canActivate: [AuthGuard]},
      {path:'while-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'while-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}}
    ]
  },
  {path:'dashboard', component:PagesComponent,canActivate: [AuthGuard],
    children:[
      {path:'', component:DashboardComponent, data:{titulo:'Curso Visual Basic'},canActivate: [AuthGuard]}, 
      {path:'secuenciales-visual', component:NavGeneralComponent,data:{titulo:'Secuenciales Visual Basic'},canActivate: [AuthGuard]},
      {path:'secuenciales-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'secuenciales-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'condicionales-visual', component:NavGeneralComponent, data:{titulo:'Condicionales Visual Basic'},canActivate: [AuthGuard]},
      {path:'condicionales-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'condicionales-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'swicht-visual', component:NavGeneralComponent, data:{titulo:'Swicht Visual Basic'},canActivate: [AuthGuard]},
      {path:'swicht-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'swicht-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'for-visual', component:NavGeneralComponent, data:{titulo:'For Visual Basic'},canActivate: [AuthGuard]},
      {path:'for-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'for-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}},
      {path:'while-visual', component:PhytonComponent, data:{titulo:'While Visual Basic'},canActivate: [AuthGuard]},
      {path:'while-ejercicioGenerales', component:NavGeneralComponent,data:{titulo:'Ejercicios Generales'}},
      {path:'while-talleres', component:NavGeneralComponent,data:{titulo:'Talleres'}}
    ]
  },
  
]

@NgModule({
 
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
