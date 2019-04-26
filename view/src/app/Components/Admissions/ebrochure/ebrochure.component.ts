import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js';

// ----- service -----------//
import { AdmissionService } from '../../../services/admission/admission.service';
import { AcademicsService } from '../../../services/academics/academics.service';
@Component({
  selector: 'app-ebrochure',
  templateUrl: './ebrochure.component.html',
  styleUrls: ['./ebrochure.component.css']
})
export class EbrochureComponent implements OnInit {
   data : any;
   brochurefileUrl : any;
   departmentlist : any;
  constructor(private admissionService: AdmissionService, private academicsService: AcademicsService) {
     this.service();
   }

  ngOnInit() {
  }
  service(){
     const Data = {type:'test'};
     this.admissionService.eBrochureList(Data).subscribe(response => {
        console.log(response);
        if(response['status'] === 200){
           this.data = response['info']
           this.brochurefileUrl = this.data.fileUrl
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
