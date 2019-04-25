import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl, FormBuilder, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


// ------- service ----------//
import { AcademicsService } from '../../../services/academics/academics.service';

@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.css']
})
export class DepartmentViewComponent implements OnInit {
  panelOpenState: boolean;
  aboutdata : any;
  peosdata : any;
  coursedata : any;
  courseFileUrl : any;
  facultydata :any;
  occdata : any;
  departmentId : any;
  facultyArray: any = [];
  constructor(
   public router: Router,
   private active_route: ActivatedRoute,
   private academicsService: AcademicsService
  ) {
   this.departmentId = this.active_route.snapshot.params['deptId'];
   this.academicsService.departmentView({'departmentID': this.departmentId }).subscribe(response => {
      console.log(response);
      this.aboutdata = response['info'];
      this.splitArray(this.aboutdata.faculty,3);
      console.log(this.facultyArray);
   });

  }


  ngOnInit() {
    this.panelOpenState = false;
  }
  splitArray(arrayData,size) {
   let arrayLength = arrayData.length;
   for (let i = 0; i < arrayLength; i+=size) {
      this.facultyArray.push(this.aboutdata.faculty.slice(i, i+size))

      
   }
  }
}
