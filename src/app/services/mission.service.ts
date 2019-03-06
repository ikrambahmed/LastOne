import { Injectable } from '@angular/core';
import { mission } from '../models/mission';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  readonly Url='http://localhost:8080/api/mission/ajout' ;
  readonly url = 'http://localhost:8080/api/mission/getall' ; 
missions : mission[];
  constructor(private http : HttpClient) { }
  
  addMission( mission : mission) : Observable<any>{
    console.log('el service') ; 
    return this.http.post(this.Url ,mission  ) ; 
  }
 

}
