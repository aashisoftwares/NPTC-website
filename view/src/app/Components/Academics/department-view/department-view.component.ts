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
      console.log(this.aboutdata);
      this.splitArray(this.aboutdata.faculty,3);
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
}
