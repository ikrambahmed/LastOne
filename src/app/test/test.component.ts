import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MissionnaireService } from '../services/missionnaire.service';
import { grade } from '../models/grade';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  missionnaireF :FormGroup ; 
  grades : grade [];
  selectedValue = null;


  constructor(private fb : FormBuilder , private missionnaireService : MissionnaireService) {
    this.missionnaireF = this.fb.group({
      cin: ['',Validators.required],
      matricule: ['',Validators.required],
      graade : ['',Validators.required],
    }) ; 
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

  add(){
    const m = this.missionnaireF.value ;
    alert(JSON.stringify(m));

    this.missionnaireService.addMissionnaire(m).subscribe(
      res => {
        alert(JSON.stringify(res));

        console.log('c bon lka res') ; 
        this.missionnaireService.loadMissionaire() ; 
      }
    )
  }

}
