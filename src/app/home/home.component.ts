import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showHideSideBar: boolean = false;
  constructor(private appService : AppService,private router : Router) { }
  ngOnInit() {
  }
  onShowSideBarChange(showHideSideBar){
    this.showHideSideBar = showHideSideBar;
  }
  logout(){
    this.appService.logout(()=>{
      this.router.navigateByUrl('/login1');
    });
  }

}
