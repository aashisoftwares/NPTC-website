import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js';

// ------- service ---------//
import { AdmissionService } from '../../../services/admission/admission.service';
import { AcademicsService } from '../../../services/academics/academics.service';
@Component({
  selector: 'app-student-facilities',
  templateUrl: './student-facilities.component.html',
  styleUrls: ['./student-facilities.component.css']
})
export class StudentFacilitiesComponent implements OnInit {
   data : any;
   departmentlist : any;
  constructor(private admissionService: AdmissionService, private academicsService: AcademicsService) { 
     this.service();
  }

  ngOnInit() {
  }
  service(){
     const Data={type:'test'};
     this.admissionService.facilitiesList(Data).subscribe(response => {
        if(response['status'] === 200){
           this.data = response['info']
        }
        else{
           alert('Somwthing went wrong!. Pleash refresh the page')
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
