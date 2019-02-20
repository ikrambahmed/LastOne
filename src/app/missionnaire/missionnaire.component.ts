import { Component, OnInit } from '@angular/core';
import { MissionnaireService } from '../services/missionnaire.service';
import { missionnaire } from '../models/missionnaire';
import { FormGroup, FormArray, FormBuilder,
  Validators,ReactiveFormsModule  } from '@angular/forms';
@Component({
  selector: 'app-missionnaire',
  templateUrl: './missionnaire.component.html',
  styleUrls: ['./missionnaire.component.css']
})
export class MissionnaireComponent implements OnInit {
  missionnaireForm :FormGroup ; 

  constructor(private fb : FormBuilder , private missionnaireService : MissionnaireService) { 
    this.missionnaireForm = this.fb.group({
      cin: ['',Validators.required],
      matricule: ['',Validators.required]
  });
  }
  ngOnInit() {

  }

  addMission(){
    const m = this.missionnaireForm.value ;
    this.missionnaireService.addMissionnaire(m).subscribe(
      res => {
        console.log('dkhalna lil add') ; 
        this.missionnaireService.loadMissionaire() ; 
      }
    )
  }


}
