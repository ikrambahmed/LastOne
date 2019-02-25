import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { MissionnaireComponent } from './missionnaire/missionnaire.component';
import { AuthService } from './services/auth.service';
import { MissionnaireService } from './services/missionnaire.service';
import { missionnaire } from './models/missionnaire';
import { ListeMissionnaireComponent } from './liste-missionnaire/liste-missionnaire.component';
import { ListeMissionnaireService } from './services/liste-missionnaire.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FilterPipe }from './filter.pipe';
import { Login1Component } from './login1/login1.component';
import { AppService } from './app.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { XHrInterceptor } from './xhr.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ChangePassComponent,
    MissionnaireComponent,
    ListeMissionnaireComponent,
    NavbarComponent,
    ContentComponent,
    Login1Component,
   ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule , 
    FormsModule , 
    ReactiveFormsModule , 
    HttpClientModule 
  
  ],
  providers: [AuthService,MissionnaireService,ListeMissionnaireService, AppService, CookieService,
  {provide :HTTP_INTERCEPTORS, useClass :XHrInterceptor , multi : true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
