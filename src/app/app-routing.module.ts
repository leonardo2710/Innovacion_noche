import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { PANEL_LAYOUT } from './router/dashboard-layout-routes';


const routes:Routes=[

  {path:'dashboard', component: PagesComponent, children:PANEL_LAYOUT },
  {path:'login', redirectTo:'/login', pathMatch:'full'},
  {path:'register', redirectTo:'/register', pathMatch:'full'},
  {path:'**', redirectTo: '404'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
