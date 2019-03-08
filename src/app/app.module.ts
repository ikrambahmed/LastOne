import { BrowserModule  } from '@angular/platform-browser';
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
import { Login1Component } from './login1/login1.component';
import { AppService } from './app.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { XHrInterceptor } from './xhr.interceptor';
import { UserComponent } from './user/user.component';
import {StoreModule} from '@ngrx/store' ; 
import {principalReducer} from './shared/principal.reducer';
import { MissionComponent } from './mission/mission.component' ; 
import { MissionService } from './services/mission.service';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { ListeMissionComponent } from './liste-mission/liste-mission.component' ;
import {MatTableModule} from '@angular/material/table' ; 
import {DataSource} from '@angular/cdk/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginator, MatPaginatorModule, MatSortModule } from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrdMissionnaireComponent } from './ord-missionnaire/ord-missionnaire.component';
import { ListaaComponent } from './listaa/listaa.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations' ; 
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
    UserComponent,
    MissionComponent,
    ListeMissionComponent,
    OrdMissionnaireComponent,
    ListaaComponent
   ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule , 
    FormsModule , 
    ReactiveFormsModule , 
    HttpClientModule ,
    StoreModule.forRoot({principal:principalReducer}) , 
    MatTableModule , 
    MatPaginatorModule , 
    NgxPaginationModule,
    MatSortModule ,
    BrowserAnimationsModule

  
  ],
  exports : [
    MatTableModule , 
    MatPaginator
  ] , 
  providers: [AuthService,MissionnaireService,ListeMissionnaireService,MissionService, AppService, CookieService,
  {provide :HTTP_INTERCEPTORS, useClass :XHrInterceptor , multi : true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
