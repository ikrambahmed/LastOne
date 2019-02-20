import { Component, OnInit } from '@angular/core';
import { missionnaire } from '../models/missionnaire';
import { ListeMissionnaireService } from '../services/liste-missionnaire.service';
import { MissionnaireService } from '../services/missionnaire.service';
@Component({
  selector: 'app-liste-missionnaire',
  templateUrl: './liste-missionnaire.component.html',
  styleUrls: ['./liste-missionnaire.component.css']
})
export class ListeMissionnaireComponent implements OnInit {
  missionnaires: missionnaire[] ;
  constructor(private missionnaireService : MissionnaireService) { }

  ngOnInit() {

  this.loadMissionaire() ;  }
  
  loadMissionaire()
  {this.missionnaireService.getMissionares().subscribe(
    data => { this.missionnaires=data},
    error => {console.log('an error occured') } , 
    () => {console.log('loading missions was done ')}
    
    
  )

  }
}
