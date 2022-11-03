import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { UsuariosComponent } from './usuarios/usuarios.component';
//import { PhytonComponent } from './phyton/phyton.component';
import { NavGeneralComponent } from '../shared/nav-general/nav-general.component';
import { AuthGuard } from '../services/auth.guard';
import { TallerBasicoComponent } from '../shared/taller-basico/taller-basico.component';

const routes:Routes=[
  {path:'dashboard', component:PagesComponent,
    children:[
      {path:'',component:DashboardComponent, data:{titulo:'BIENVENIDOS SECCIÓN - TEMAS'}},
    ]
  },
  {path:'dashboard',component:PagesComponent,
    children:[

      {path:'', component:DashboardComponent, data:{titulo:' Curso Phyton'}},
      {path:'secuenciales-phyton', component:NavGeneralComponent,data:{titulo:'Secuenciales Python'}},
      {path:'condicionales-phyton', component:NavGeneralComponent, data:{titulo:'Condicionales Python'}},
      {path:'swicht-phyton', component:NavGeneralComponent, data:{titulo:'Swicht Python'}},
      {path:'for-phyton', component:NavGeneralComponent, data:{titulo:'For Python'}},
      {path:'while-phyton', component:NavGeneralComponent, data:{titulo:'While Python'}}

    ]
  },
  {path:'dashboard', component:PagesComponent,
    children:[

      {path:'', component:DashboardComponent, data:{titulo:'Curso PhP'}},
      {path:'secuenciales-php', component:NavGeneralComponent,data:{titulo:'Secuenciales PHP'}},
      {path:'condicionales-php', component:NavGeneralComponent, data:{titulo:'Condicionales PHP'}},
      {path:'swicht-php', component:NavGeneralComponent, data:{titulo:'Swicht PHP'}},
      {path:'for-php', component:NavGeneralComponent, data:{titulo:'For PHP'}},
      {path:'while-php', component:NavGeneralComponent, data:{titulo:'While PHP'}}

    ]
  },
  {path:'dashboard', component:PagesComponent,
    children:[

      {path:'', component:DashboardComponent, data:{titulo:'Curso Javascript'}},
      {path:'secuenciales-javascript', component:NavGeneralComponent,data:{titulo:'Secuenciales Javascript'}},
      {path:'condicionales-javascript', component:NavGeneralComponent, data:{titulo:'Condicionales Javascript'}},
      {path:'swicht-javascript', component:NavGeneralComponent, data:{titulo:'Swicht Javascript'}},
      {path:'for-javascript', component:NavGeneralComponent, data:{titulo:'For Javascript'}},
      {path:'while-javascript', component:NavGeneralComponent, data:{titulo:'While Javascript'}}

    ]
  },

  {path:'dashboard', component:PagesComponent,
    children:[

      {path:'', component:DashboardComponent, data:{titulo:'Curso Java'}},
      {path:'secuenciales-java', component:NavGeneralComponent,data:{titulo:'Secuenciales Java'}},
      {path:'condicionales-java', component:NavGeneralComponent, data:{titulo:'Condicionales Java'}},
      {path:'swicht-java', component:NavGeneralComponent, data:{titulo:'Swicht Java'}},
      {path:'for-java', component:NavGeneralComponent, data:{titulo:'For Java'}},
      {path:'while-java', component:NavGeneralComponent, data:{titulo:'While Java'}}

    ]
  },
  {path:'dashboard', component:PagesComponent,
    children:[
      {path:'', component:DashboardComponent, data:{titulo:'Curso Pseint'}},
      {path:'secuenciales-pseint', component:NavGeneralComponent,data:{titulo:'Secuenciales pseint'}},
      {path:'secuenciales-pseint', component:NavGeneralComponent,data:{titulo:'Secuenciales pseint'}},
      {path:'secuenciales-ejercicio1', component:NavGeneralComponent,data:{titulo:'Ejercicio 1 pseint'}},
      {path:'secuenciales-ejercicio2', component:NavGeneralComponent,data:{titulo:'Ejercicio 2 pseint'}},
      {path:'secuenciales-ejercicio3', component:NavGeneralComponent,data:{titulo:'Ejercicio 3 pseint'}},
      {path:'secuenciales-ejercicio4', component:NavGeneralComponent,data:{titulo:'Ejercicio 4 pseint'}},
      {path:'secuenciales-ejercicio5', component:NavGeneralComponent,data:{titulo:'Ejercicio 5 pseint'}},
      {path:'condicionales-pseint', component:NavGeneralComponent, data:{titulo:'Condicionales pseint'}},

      {path:'swicht-pseint', component:NavGeneralComponent, data:{titulo:'Swicht pseint'}},
      {path:'for-pseint', component:NavGeneralComponent, data:{titulo:'For pseint'}},
      {path:'while-pseint', component:NavGeneralComponent, data:{titulo:'While pseint'}}

    ]
  },
  {path:'dashboard', component:PagesComponent,
    children:[

      {path:'', component:DashboardComponent, data:{titulo:'Curso Visual Basic'}},
      {path:'secuenciales-visual', component:NavGeneralComponent,data:{titulo:'Secuenciales Visual Basic'}},
      {path:'condicionales-visual', component:NavGeneralComponent, data:{titulo:'Condicionales Visual Basic'}},
      {path:'swicht-visual', component:NavGeneralComponent, data:{titulo:'Swicht Visual Basic'}},
      {path:'for-visual', component:NavGeneralComponent, data:{titulo:'For Visual Basic'}},
      {path:'while-visual', component:NavGeneralComponent, data:{titulo:'While Visual Basic'}}

    ]
  },
  {path:'dashboard', component:PagesComponent,
    children:[

      {path:'', component:DashboardComponent, data:{titulo:'Taller Practico'}},
      {path:'secuenciales-practico', component:TallerBasicoComponent,data:{titulo:'Taller Practico Secuenciales'}},
      {path:'condicionales-practico', component:TallerBasicoComponent,data:{titulo:'Taller Practico Condicionales'}},
      {path:'ciclos-practico', component:TallerBasicoComponent,data:{titulo:'Taller Practico Ciclos'}},

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
