import { Component, OnInit, Input } from '@angular/core';
import { MissionnaireService } from '../services/missionnaire.service';
import { missionnaire } from '../models/missionnaire';
import { FormGroup, FormArray, FormBuilder,Validators,ReactiveFormsModule  } from '@angular/forms';
import { grade } from '../models/grade';
@Component({
  selector: 'app-missionnaire',
  templateUrl: './missionnaire.component.html',
  styleUrls: ['./missionnaire.component.css']
})
export class MissionnaireComponent implements OnInit {
  missionnaireForm :FormGroup ; 
  grades : grade [];
  
@Input ()
operation ; 
@Input() 
butonMsg ;
@Input() selectedMissionnaire ; 


  constructor(private fb : FormBuilder , private missionnaireService : MissionnaireService) { 
    this.createForm() ; 
  
  }
  loadgrade()
  {this.missionnaireService.getGrade().subscribe(
    data => { this.grades=data;},
    error => {console.log(error); } , 
    () => {console.log('loading grades was done ')}
  )}
  ngOnInit() {
    this.loadgrade() ; 

  }
 
  createForm()
  {
    this.missionnaireForm = this.fb.group({
      cin: ['',Validators.required],
      matricule: ['',Validators.required],
      nom: ['',Validators.required],
      nomL: ['',Validators.required],
      prenom: ['',Validators.required],
      prenomL: ['',Validators.required],
      nationalite: ['',Validators.required],
      nationaliteL : ['',Validators.required],
      datenaissance : ['',Validators.required],
      date_cin : ['',Validators.required],
      place_cin : ['',Validators.required],
      niveau  : ['',Validators.required],
      ministr: ['',Validators.required],
  });
  }
  
  update() {
  this.missionnaireService.updateMissionnaire(this.selectedMissionnaire)
  .subscribe(
    res =>{
      this.initMiss() ; 
      this.missionnaireService.loadMissionaire() ; 
      this.operation='' ; 

    }
  )

  } 
  remove()
  {
  this.missionnaireService.deleteMissionnaire(this.selectedMissionnaire.cin).subscribe(
    res => {
     
      this.selectedMissionnaire = new missionnaire() ;
      this.missionnaireService.loadMissionaire() ; 
      this.operation='' ; 
    }
    
  )

  }

  add(){
    const m = this.missionnaireForm.value ;
    this.missionnaireService.addMissionnaire(m).subscribe(
      res => {
        
        this.initMiss() ; 
        this.missionnaireService.loadMissionaire() ; 
        this.operation='' ; 
      }
    )
  }
  initMiss()
  {
    this.selectedMissionnaire= new missionnaire() ; 
    
    this.createForm() ; 
  }


}
