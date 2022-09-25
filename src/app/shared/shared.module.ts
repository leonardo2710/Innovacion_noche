import { NgModule } from '@angular/core';
import { TextMaskModule } from 'angular2-text-mask';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { NavGeneralComponent } from './nav-general/nav-general.component';

import { YouTubePlayerModule } from '@angular/youtube-player';

import { NgxLoadingModule } from 'ngx-loading';
import { SpinnerComponent } from './spinner/spinner.component';
import { CUSTOM_ERROR_MESSAGES } from 'ng-bootstrap-form-validation';
import { CUSTOM_ERRORS } from 'src/custom-errors';



@NgModule({
  providers: [
    {
      provide: CUSTOM_ERROR_MESSAGES,
      useValue: CUSTOM_ERRORS,
      multi: true,
    },
  ],
  declarations: [
    SpinnerComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    FooterComponent,
    NavGeneralComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TextMaskModule,
    YouTubePlayerModule,

    NgxLoadingModule.forRoot({}),
   

  ], 
  exports:[
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    FooterComponent,  
    NavGeneralComponent,
    SpinnerComponent

  ]
})
export class SharedModule { }
