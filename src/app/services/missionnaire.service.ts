import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { missionnaire } from '../models/missionnaire';
import { grade } from '../models/grade';

@Injectable({
  providedIn: 'root'
})

export class MissionnaireService {
  readonly Url='http://localhost:8080/missionaire' ;
  readonly rootUrL='http://localhost:8080/listgrade' ; 
  readonly rootUrl='http://localhost:8080' ; 

  missionnaires : missionnaire[] ; 
  constructor(private http : HttpClient){

  }
  getMissionares():Observable<any> {
    return this.http.get(this.Url) ; 
  }

  loadMissionaire()
  {this.getMissionares().subscribe(
    data => { this.missionnaires=data},
    error => {console.log(error) } , 
    () => {console.log('loading missions was done ')}
  )}
  addMissionnaire( miss : missionnaire) : Observable<any>{
  return this.http.post(this.Url ,miss  ) ; 
 
  }
  updateMissionnaire(miss : missionnaire ): Observable<any> {
    return this.http.put(this.Url ,miss) ;
  }

  deleteMissionnaire(cin : String) : Observable<any>{
   return this.http.delete(this.Url+ `/${cin}`) ; 
  }
  getGrade():Observable<any> 
  { return this.http.get(this.rootUrL) ; 
  }
  
  getfonctions():Observable<any> 
  {return this.http.get(this.rootUrl+'/listfonction'); }
  getClasses():Observable<any> 
  {
    return this.http.get(this.rootUrl+'/listclass') ; 
  }
  getCategories():Observable<any> 
  {
    return this.http.get(this.rootUrl+'/listcategorie') ; 
  }
  getgroupes():Observable<any> 
  {
    return this.http.get(this.rootUrl+'/listgroupe') ; 
  }

  
}
