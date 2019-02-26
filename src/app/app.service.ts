import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';


@Injectable()
export class AppService {
  response ; 
  authenticated: boolean = false;

  constructor(private http: HttpClient,
      private cookieService: CookieService) { }

  authenticate(credentials, callback) {
    if(credentials){
      const token = btoa(credentials.username + ':' + credentials.password);
      this.cookieService.set('token', token);

      this.http.get('http://localhost:8080/api/user').subscribe(response => {
          if (response && response['name']) {
            console.log(response);
            this.response= response ; 
              this.authenticated = true;
            
          } else {
              this.authenticated = false;
          }
          return callback && callback();
      });
    }
    else {
      this.authenticated = false;
    }
  }

  logout(callback){
    this.authenticated = false;
    return callback && callback();
  }

}
