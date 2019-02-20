import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
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
import { SidebarComponent } from './sidebar/sidebar.component';


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
    SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    FormsModule , 
    ReactiveFormsModule , 
    HttpClientModule , 
  
  ],
  providers: [AuthService,MissionnaireService,ListeMissionnaireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
