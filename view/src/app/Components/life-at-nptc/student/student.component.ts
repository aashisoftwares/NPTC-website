import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js';

// ------------- service ------------//
import { LifeAtNptcService } from '../../../services/lifeAtNptc/life-at-nptc.service';
import { AcademicsService } from '../../../services/academics/academics.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
   data : any;
   achievementsFileUrl : any;
   rankHoldersFileUrl : any;
   departmentlist : any;

  constructor(private lifeAtNptService: LifeAtNptcService, private academicsService: AcademicsService) { 
     this.service();
  }

  ngOnInit() {
  }
  service(){
     const Data = {type:'test'};
     this.lifeAtNptService.studentList(Data).subscribe(response =>{
        console.log(response);
        if(response['status'] === 200){
            this.data = response['info']
            this.achievementsFileUrl = this.data.achievementsFileUrl
            this.rankHoldersFileUrl = this.data.rankHoldersFileUrl
        }
        else{
           alert('Something went wrong!. Please refresh the page')
        }
     });
     this.academicsService.departmentList(Data).subscribe(response => {
      if(response['status'] === 200) { 
        this.departmentlist = response['info']
      } else {
        alert('Something went wrong!. Please refresh the page')
      }
    }); 
  }
}
