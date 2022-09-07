import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
/* import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component'; */
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CondicionalesPhytonComponent } from './condicionales-phyton/condicionales.phyton.component';
import {  SecuencialesPhytonComponent } from './secuenciales-phyton/secuenciales.phyton.component';
import {PhytonComponent} from './phyton/phyton.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CondicionalesPhytonComponent,
    PhytonComponent,
    SecuencialesPhytonComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    CondicionalesPhytonComponent,
    PhytonComponent,
    SecuencialesPhytonComponent
    
  ]
})
export class PagesModule { }
