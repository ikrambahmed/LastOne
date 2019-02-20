import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { missionnaire } from '../models/missionnaire';

@Injectable({
  providedIn: 'root'
})

export class MissionnaireService {
  readonly Url='http://localhost:8080/missionaire' ;
  missionnaires : missionnaire[] ; 

  constructor(private http : HttpClient){

  }
  getMissionares():Observable<any> {
    return this.http.get(this.Url) ; 
  }

  loadMissionaire()
  {this.getMissionares().subscribe(
    data => { this.missionnaires=data},
    error => {console.log('an error occured') } , 
    () => {console.log('loading missions was done ')}
  )

  }
  addMissionnaire( miss : missionnaire) : Observable<any>{
  return this.http.post(this.Url ,miss  ) ; 
 
  }
  updateMissionnaire(miss : missionnaire ): Observable<any> {
    return this.http.put(this.Url ,miss) ;
  }

  deleteMissionnaire(cin : String) : Observable<any>{
   return this.http.delete(this.Url+'/${cin}') ; 

  }
}
