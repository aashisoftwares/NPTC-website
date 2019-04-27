import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js';

// ------ service --------//
import { AdmissionService } from '../../../services/admission/admission.service';
import { AcademicsService } from '../../../services/academics/academics.service';
@Component({
  selector: 'app-scholarships',
  templateUrl: './scholarships.component.html',
  styleUrls: ['./scholarships.component.css']
})
export class ScholarshipsComponent implements OnInit {
   data : any;
   departmentlist : any;
  constructor( private admissionService: AdmissionService, private academicsService: AcademicsService) {
     this.service();
   }

  ngOnInit() {
  }
  service(){
     const Data = {type:'test'};
     this.admissionService.scholarshipsList(Data).subscribe(response => {
        if(response['status'] === 200){
           this.data = response['info'];
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
