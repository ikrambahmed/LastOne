import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder,Validators,ReactiveFormsModule  } from '@angular/forms';
import { MissionnaireService } from '../services/missionnaire.service';
import { missionnaire } from '../models/missionnaire';
import { mission } from '../models/mission';

@Component({
  selector: 'app-ord-missionnaire',
  templateUrl: './ord-missionnaire.component.html',
  styleUrls: ['./ord-missionnaire.component.css']
})
export class OrdMissionnaireComponent implements OnInit {
  cin: string = '';
  existe : Boolean ; 
  OrdMissForm :FormGroup ; 
  missionnare : missionnaire ; 
  nom: String ='' ; 
  prenom : String ='' ; 
  Date_depart :Date ; 
  Date_arrivee:Date ; 

  @Input()
  date_debut ; 
  constructor(private fb : FormBuilder , private missService : MissionnaireService) { 

    this.OrdMissForm = this.fb.group({
      cin: ['',Validators.required],
      nom: ['',Validators.required],
      prenom: ['',Validators.required],
      Date_arrivee : ['',Validators.required],
      Date_depart:['',Validators.required]


    }) ; 
  }
  
  Search(cin)
  {
    return this.missService.getOneMiss(cin).subscribe(
      data => { 
        if (data && data['cin']) {
        this.missionnare=data ; 
        this.nom = this.missionnare.nom ; 
        this.prenom  = this.missionnare.prenom ; 
       // this.Date_arrivee=this.date_debut ; 
        console.log(this.Date_arrivee) ;
       // this.Date_depart=this.mission.date_fin ; 
        console.log(this.nom , this.prenom ,missionnaire) ; 
        console.log('lkitou el cin') ; 
        this.existe=true ; 
      }
     else 
     this.existe=false ; },
      error => {console.log(error); 
     } , 
      () => {console.log('loading classes was done ')}
    )}
    go(){
      this.cin='' ; 
    }
  ngOnInit() {
  }

}
