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
  //LOS PARAMETROS IDS SON LOS MISMO QUE ESTAN GUARDADOS EN BASE DATOS
  {path:'dashboard', component:PagesComponent,
    children:[
      {path:'',component:DashboardComponent, data:{titulo:'BIENVENIDOS SECCIÓN - TEMAS'}},
    ]
  },
  {path:'dashboard',component:PagesComponent,
    children:[

      {path:'', component:DashboardComponent, data:{titulo:' Curso Phyton'}},
      {path:'secuenciales-phyton', component:NavGeneralComponent,data:{titulo:'Secuenciales Python', id:11}},
      {path:'condicionales-phyton', component:NavGeneralComponent, data:{titulo:'Condicionales Python', id:11}},
      {path:'swicht-phyton', component:NavGeneralComponent, data:{titulo:'Swicht Python'}},
      {path:'for-phyton', component:NavGeneralComponent, data:{titulo:'For Python', id:11}},
      {path:'while-phyton', component:NavGeneralComponent, data:{titulo:'While Python', id:11}}

    ]
  },
  {path:'dashboard', component:PagesComponent,
    children:[

      {path:'', component:DashboardComponent, data:{titulo:'Curso PhP'}},
      {path:'secuenciales-php', component:NavGeneralComponent,data:{titulo:'Secuenciales PHP', id:10}},
      {path:'condicionales-php', component:NavGeneralComponent, data:{titulo:'Condicionales PHP', id:10}},
      {path:'swicht-php', component:NavGeneralComponent, data:{titulo:'Swicht PHP'}},
      {path:'for-php', component:NavGeneralComponent, data:{titulo:'For PHP', id:10}},
      {path:'while-php', component:NavGeneralComponent, data:{titulo:'While PHP', id:10}}

    ]
  },
  {path:'dashboard', component:PagesComponent,
    children:[

      {path:'', component:DashboardComponent, data:{titulo:'Curso Javascript'}},
      {path:'secuenciales-javascript', component:NavGeneralComponent,data:{titulo:'Secuenciales Javascript', id:5}},
      {path:'condicionales-javascript', component:NavGeneralComponent, data:{titulo:'Condicionales Javascript', id:6}},
      {path:'swicht-javascript', component:NavGeneralComponent, data:{titulo:'Swicht Javascript'}},
      {path:'for-javascript', component:NavGeneralComponent, data:{titulo:'For Javascript', id:7}},
      {path:'while-javascript', component:NavGeneralComponent, data:{titulo:'While Javascript', id:8}}

    ]
  },

  {path:'dashboard', component:PagesComponent,
    children:[

      {path:'', component:DashboardComponent, data:{titulo:'Curso Java'}},
      {path:'secuenciales-java', component:NavGeneralComponent,data:{titulo:'Secuenciales Java', id:5}},
      {path:'condicionales-java', component:NavGeneralComponent, data:{titulo:'Condicionales Java', id:6}},
      {path:'swicht-java', component:NavGeneralComponent, data:{titulo:'Swicht Java',id:9}},
      {path:'for-java', component:NavGeneralComponent, data:{titulo:'For Java', id:7}},
      {path:'while-java', component:NavGeneralComponent, data:{titulo:'While Java', id:8}}

    ]
  },
  {path:'dashboard', component:PagesComponent,
    children:[
      {path:'', component:DashboardComponent, data:{titulo:'Curso Pseint'}},
      {path:'secuenciales-pseint', component:NavGeneralComponent,data:{titulo:'Secuenciales pseint', id:1}},
      {path:'condicionales-pseint', component:NavGeneralComponent, data:{titulo:'Condicionales pseint', id:2}},
      {path:'swicht-pseint', component:NavGeneralComponent, data:{titulo:'Swicht pseint'}},
      {path:'for-pseint', component:NavGeneralComponent, data:{titulo:'For pseint', id:3}},
      {path:'while-pseint', component:NavGeneralComponent, data:{titulo:'While pseint', id:4}}
    ]
  },
  {path:'dashboard', component:PagesComponent,
    children:[

      {path:'', component:DashboardComponent, data:{titulo:'Curso Visual Basic'}},
      {path:'secuenciales-visual', component:NavGeneralComponent,data:{titulo:'Secuenciales Visual Basic', id:1}},
      {path:'condicionales-visual', component:NavGeneralComponent, data:{titulo:'Condicionales Visual Basic', id:2}},
      {path:'swicht-visual', component:NavGeneralComponent, data:{titulo:'Swicht Visual Basic'}},
      {path:'for-visual', component:NavGeneralComponent, data:{titulo:'For Visual Basic', id:3}},
      {path:'while-visual', component:NavGeneralComponent, data:{titulo:'While Visual Basic', id:4}}

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
