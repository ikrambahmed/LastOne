import { Component, OnInit, Input } from '@angular/core';
import { MissionnaireService } from '../services/missionnaire.service';
import { missionnaire } from '../models/missionnaire';
import { FormGroup, FormArray, FormBuilder,Validators,ReactiveFormsModule  } from '@angular/forms';
import { grade } from '../models/grade';
import { fonction } from '../models/fonction';
import { categorie } from '../models/categorie';
import { groupe } from '../models/groupe';
import { classe } from '../models/classe';
@Component({
  selector: 'app-missionnaire',
  templateUrl: './missionnaire.component.html',
  styleUrls: ['./missionnaire.component.css']
})
export class MissionnaireComponent implements OnInit {
  missionnaireForm :FormGroup ; 
  grades : grade [];
  fonctions : fonction[] ; 
  categories : categorie[] ; 
  groupes : groupe[] ; 
  classes : classe[] ; 
  
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
  loadfonction()
  {this.missionnaireService.getfonctions().subscribe(
    data => { this.fonctions=data;},
    error => {console.log(error); } , 
    () => {console.log('loading grades was done ')}
  )}
  loadclasse()
  {this.missionnaireService.getClasses().subscribe(
    data => { this.classes=data;},
    error => {console.log(error); } , 
    () => {console.log('loading grades was done ')}
  )}
  loadcateg()
  {this.missionnaireService.getCategories().subscribe(
    data => { this.categories=data;},
    error => {console.log(error); } , 
    () => {console.log('loading grades was done ')}
  )}

  loadgroupe()
  {this.missionnaireService.getgroupes().subscribe(
    data => { this.groupes=data;},
    error => {console.log(error); } , 
    () => {console.log('loading grades was done ')}
  )}

  ngOnInit() {
    this.loadgrade(); 
    this.loadcateg(); 
    this.loadclasse(); 
    this.loadgroupe(); 
    this.loadclasse(); 
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
  )} 
  remove()
  {
  this.missionnaireService.deleteMissionnaire(this.selectedMissionnaire.cin).subscribe(
    res => {
     
      this.selectedMissionnaire = new missionnaire() ;
      this.missionnaireService.loadMissionaire() ; 
      this.operation='' ; 
    }
    
  )}

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
