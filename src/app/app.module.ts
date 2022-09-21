import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { YouTubePlayerModule } from '@angular/youtube-player';


import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';

import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesModule } from './pages/pages.module';




@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent
   
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    AuthModule,
    PagesModule,
    YouTubePlayerModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

