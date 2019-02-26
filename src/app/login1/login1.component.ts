import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
  loginForm: FormGroup;

  credentials = {
    username: '',
    password: ''
  };
  constructor(private fb: FormBuilder,
    private appService: AppService,
    private router: Router) { }

ngOnInit() {
this.loginForm = this.fb.group({
username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
});
}


login(){
  this.appService.authenticate(this.credentials, ()=>{
    console.log('login lekbira') ; 
    this.router.navigateByUrl('/home');
  });
 /*this.router.navigateByUrl('/home') ;*/
}




}
