import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { MissionnaireComponent } from './missionnaire/missionnaire.component';
import { ListeMissionnaireComponent } from './liste-missionnaire/liste-missionnaire.component';
import { Login1Component } from './login1/login1.component';
import { UserComponent } from './user/user.component';
import { MissionComponent } from './mission/mission.component';
import { ListeMissionComponent } from './liste-mission/liste-mission.component';
import { OrdMissionnaireComponent } from './ord-missionnaire/ord-missionnaire.component';
import { ListaaComponent } from './listaa/listaa.component';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
 // {path : '' , redirectTo :'/home' , pathMatch:'full'},
  {path :'login' , component : LoginComponent} , 
  {path:'home' , component: HomeComponent },
  {path:'change', component: ChangePassComponent},
  {path:'missionnaire' , component:MissionnaireComponent},
  {path:'login1', component:Login1Component},
  {path : 'users' , component : UserComponent},
  {path:'mission', component:MissionComponent},
  {path : 'liste-m', component:ListeMissionnaireComponent},
  {path:'missions', component:ListeMissionComponent} , 
  {path : 'ord',component:OrdMissionnaireComponent},
  {path:'lista', component:ListaaComponent},
  {path:'back', component:BackgroundImageComponent} , 
  {path:'add', component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
