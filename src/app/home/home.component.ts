import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PrincipalState } from '../shared/principal.state';
import { Principal } from '../shared/principal.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  showHideSideBar: boolean = false;
  private principal : Principal ; 
  
  constructor(private appService : AppService,private router : Router,
    private store : Store<PrincipalState>) { }
  ngOnInit() {
  this.store.select('principal').subscribe(principal =>{
    console.log('principal authorities') ; 
    console.log(principal) ; 
    this.principal = principal ;
  })
  }

  onShowSideBarChange(showHideSideBar){
    this.showHideSideBar = showHideSideBar;
  }
  logout(){
    this.appService.logout(()=>{
      this.router.navigateByUrl('/login1');
    });
  }


  hasRoleUser(){
   let hasRole :Boolean =false ; 
    this.principal.authorities.forEach(item => {
      if (item.authority === 'ROLE_USER')
      {
        hasRole=true ;  
      }
      
    });
    return hasRole ; 
  }

  hasRoleAdmin(){
  let  hasRole :Boolean =false ; 
    this.principal.authorities.forEach(item => {
      if (item.authority === 'ROLE_ADMIN')
      {
      hasRole=true ; 
        
      }
      
    });
    return hasRole ; 
  }



}
