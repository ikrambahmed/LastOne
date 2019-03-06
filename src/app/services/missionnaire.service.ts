import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { missionnaire } from '../models/missionnaire';
import { grade } from '../models/grade';

@Injectable({
  providedIn: 'root'
})

export class MissionnaireService {

  readonly Url='http://localhost:8080/api/missionaire' ;
  readonly rootUrL='http://localhost:8080/api/listgrade' ; 

  readonly rootUrl='http://localhost:8080' ; 
  readonly root = 'http://localhost:8080/api/missionaire/lista' ; 
  grades:grade[] ; 
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
    () => {console.log('loading missionnaires was done ')}
  )}
  addMissionnaire( miss : missionnaire) : Observable<any>{
    console.log('fi west el service') ; 
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
  {console.log('dkhalna lil fonctions')
    return this.http.get('http://localhost:8080/api/listfonction'); }
  
  getClasses():Observable<any> 
  {
    return this.http.get('http://localhost:8080/api/listclasse') ; 
  }
  getCategories():Observable<any> 
  {
    return this.http.get(this.rootUrl+'/api/listcategorie') ; 
  }
  getgroupes():Observable<any> 
  {
    return this.http.get(this.rootUrl+'/api/listgroupe') ; 
  }
/* getOneGrade(lib : String):Observable<any>
 {
  return this.http.get(this.rl+'/listegrade?name='+lib)
}*/

getOneMiss(cin : String) : Observable<any>{
  return this.http.get('http://localhost:8080/api/missionaire/lista?cin='+cin) ; 
 }
}
