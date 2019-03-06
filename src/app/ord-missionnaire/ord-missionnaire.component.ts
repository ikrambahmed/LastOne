import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder,Validators,ReactiveFormsModule  } from '@angular/forms';
import { MissionnaireService } from '../services/missionnaire.service';
import { missionnaire } from '../models/missionnaire';

@Component({
  selector: 'app-ord-missionnaire',
  templateUrl: './ord-missionnaire.component.html',
  styleUrls: ['./ord-missionnaire.component.css']
})
export class OrdMissionnaireComponent implements OnInit {
  cin: string = '';
  existe : Boolean =false ; 
  OrdMissForm :FormGroup ; 
  missionnare : missionnaire ; 
  nom: String ='' ; 
  prenom : String ='' ; 
  constructor(private fb : FormBuilder , private missService : MissionnaireService) { 

    this.OrdMissForm = this.fb.group({
      cin: ['',Validators.required],
      nom: ['',Validators.required],
      prenom: ['',Validators.required]
    }) ; 
  }

  Search(cin)
  {
    return this.missService.getOneMiss(cin).subscribe(
      data => { 
        this.missionnare=data ; 
        this.nom = this.missionnare.nom ; 
        this.prenom  = this.missionnare.prenom ; 
        console.log(this.nom , this.prenom ,missionnaire) ; 
        console.log('lkitou el cin') ; 
        this.existe=true ; 
      },
      error => {console.log(error); 
      this.existe=false ; } , 
      () => {console.log('loading classes was done ')}
    )}
    go(){
      this.cin='' ; 
    }
  ngOnInit() {
  }

}
