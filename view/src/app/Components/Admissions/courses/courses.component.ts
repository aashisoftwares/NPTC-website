import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js';
import { FormGroup, Validators, FormControl, AbstractControl, FormBuilder, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// ------ service -----------//
import { AcademicsService } from '../../../services/academics/academics.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  programmedata : any;
  courseData : any;
  departmentlist : any;
  programmeId = this.active_route.snapshot.params['programmeId']
  constructor( public router: Router,
    private active_route: ActivatedRoute,
    private academicsService: AcademicsService) {
    this.service();
    this.programmeId = this.active_route.snapshot.params['programmeId'];   
   }
  ngOnInit() {
  }
  service(){
    const Data = { type : 'test'};
    this.academicsService.programmesList(Data).subscribe(response => {
      if(response['status'] === 200) {
        this.programmedata = response['info']
        const programid = this.programmedata.map(object => {
          this.academicsService.departmentListFilterByProgramme({programmeID: object._id}).subscribe(response => {
            if (response['status'] === 200) {
              this.courseData = response['info'];
            } else {
              alert('Something went wrong!. Please refresh the page')
            }
          });
        })
       
      } else {
        alert('Something went wrong. please refresh the page')
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
