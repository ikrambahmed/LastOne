import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder,Validators,ReactiveFormsModule  } from '@angular/forms';
import { MissionService } from '../services/mission.service';
import { error } from '@angular/compiler/src/util';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker' ;
import { mission } from '../models/mission';


@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
mission: mission ; 
  missionForm:FormGroup;
  date_debut:Date ; 
  currentYea: number;
  strr : String ; 
  constructor(private fb : FormBuilder , private missionService: MissionService) { 
    this.createForm() ; 
    this.currentYea = (new Date()).getFullYear() ;
   }

  ngOnInit() {
    this.mission=new mission() ; 
    
    this.currentYea = (new Date()).getFullYear() ; 
    this.strr=this.currentYea.toString() ;
    
    
  }



  createForm()
  {
    console.log('creation form') ; 
    this.missionForm = this.fb.group({
      code_mission: ['',Validators.required],
      objetA: ['',Validators.required],
      objetF: ['',Validators.required],
      date_fin: ['',Validators.required],
      date_debut : ['',Validators.required],
      
  });
  }

  add(){
    const m = this.missionForm.value ;
    this.missionService.addMission(m).subscribe(
      res => {
        this.mission=res ; 
          console.log("donne") ;   
         },
         error=>{console.log("ourourouuu");}    
    )
  }
}
