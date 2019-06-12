import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl, FormBuilder, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


import { HttpClient } from '@angular/common/http';
import { FileSaverService } from 'ngx-filesaver';


import * as config from '../../../../../../config.json';

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

  _facultyATArray: any[] = [];
  _facultySSTArray: any[] = [];
  _facultyANTArray: any[] = [];
  _facultySSNTArray: any[] = [];

  facultyATArray: any[] = [];
  facultySSTArray: any[] = [];
  facultyANTArray: any[] = [];
  facultySSNTArray: any[] = [];
  
   toShow: any = 'about';
  // URL LINK
  linkUrl = config['LINK_URL'];

  constructor(
   public router: Router,
   private active_route: ActivatedRoute,
   private academicsService: AcademicsService,
   private _httpClient: HttpClient,
   private _FileSaverService: FileSaverService
  ) {
   this.departmentId = this.active_route.snapshot.params['deptId'];
   this.academicsService.departmentView({'departmentID': this.departmentId }).subscribe(response => {
      this.aboutdata = response['info'];
      this._facultyATArray = this.aboutdata.faculty.filter(x => x.category === 'AT');
      this.splitATArray(this._facultyATArray, 3);
      this._facultySSTArray = this.aboutdata.faculty.filter(x => x.category === 'SST');
      this.splitSSTArray(this._facultySSTArray, 3);
      this._facultyANTArray = this.aboutdata.faculty.filter(x => x.category === 'ANT');
      this.splitANTArray(this._facultyANTArray, 3);
      this._facultySSNTArray = this.aboutdata.faculty.filter(x => x.category === 'SSNT');
      this.splitSSNTArray(this._facultySSNTArray, 3);
   });
  }
  ngOnInit() {
    this.panelOpenState = false;
    console.log(this.facultySSNTArray.length);
  }
   splitATArray(arrayData,size) {
      let arrayLength = arrayData.length;
      for (let i = 0; i < arrayLength; i+=size) {
         this.facultyATArray.push(this._facultyATArray.slice(i, i+size))
      }
   }

   splitSSTArray(arrayData,size) {
      let arrayLength = arrayData.length;
      for (let i = 0; i < arrayLength; i+=size) {
         this.facultySSTArray.push(this._facultySSTArray.slice(i, i+size))
      }
   }
   splitANTArray(arrayData,size) {
      let arrayLength = arrayData.length;
      for (let i = 0; i < arrayLength; i+=size) {
         this.facultyANTArray.push(this._facultyANTArray.slice(i, i+size))
      }
   }
   splitSSNTArray(arrayData,size) {
      let arrayLength = arrayData.length;
      for (let i = 0; i < arrayLength; i+=size) {
         this.facultySSNTArray.push(this._facultySSNTArray.slice(i, i+size))
      }
   }

  changeTab(value) {
     this.toShow = value;
  }
  download(url: string) {
      this._httpClient.get(url, {
      observe: 'response',
      responseType: 'blob'
      }).subscribe(res => {
         this._FileSaverService.save(res.body, "file.pdf");
      });
   }

   filterTheory(course) {
      return course.filter(x => x.courseType === 'Theory');
   }

   
   filterPractical(course) {
      return course.filter(x => x.courseType === 'Practical');
   }
}
