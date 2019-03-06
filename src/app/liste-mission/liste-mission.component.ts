import { Component, OnInit, ViewChild } from '@angular/core';
import { MissionService } from '../services/mission.service';
import { mission } from '../models/mission';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MatTableDataSource} from '@angular/material' ; 
import {MatTableModule} from '@angular/material/table';
import {DataSource} from '@angular/cdk/table';
import { CdkTableModule } from '@angular/cdk/table';
import {MatPaginator} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-mission',
  templateUrl: './liste-mission.component.html',
  styleUrls: ['./liste-mission.component.css']
})

export class ListeMissionComponent implements OnInit {
  missions : mission[] ; 
  totalRec : number;
  page: number = 1;
  listData : MatTableDataSource<any> ; 
  readonly url = 'http://localhost:8080/api/mission'
  constructor(private missionService : MissionService , 
    private http : HttpClient , 
    private router : Router) { }
 
  goToMission(){
    this.router.navigateByUrl('/mission');
    }

  getMissions():Observable<any> {
    return this.http.get(this.url) ; 
  }
  
  loadMissions()
  {this.getMissions().subscribe(
   list => { 
     this.missions=list ;
     this.totalRec = this.missions.length;

    },
    error => {console.log(error) } , 
    () => {console.log('loading missionnaires was done ');}
  ) ; 
  
}

 // displayedColumns: string[] = ['code_mission', 'objetA', 'objetF', 'code'];

  //@ViewChild(MatPaginator) paginator: MatPaginator;
  //dataSource = new MatTableDataSource<any>(this.missions);
  ngOnInit() {
    this.loadMissions() ;
   // console.log(this.dataSource) ; 
   // this.dataSource.paginator = this.paginator;

  }
}



