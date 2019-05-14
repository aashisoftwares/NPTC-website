import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js';

// ------ service-------------//
import { AdmissionService } from '../../../services/admission/admission.service';
@Component({
  selector: 'app-eligibility-criteria',
  templateUrl: './eligibility-criteria.component.html',
  styleUrls: ['./eligibility-criteria.component.css']
})
export class EligibilityCriteriaComponent implements OnInit {
   data : any;
  constructor( private admissionService: AdmissionService) {
     this.service();
   }

  ngOnInit() {
  }
  service(){
     const Data = {type:'test'};
     this.admissionService.eligibilityList(Date).subscribe(respone => {
        if(respone['status'] === 200){
           this.data=respone['info']
        }
        else{
           alert('Something went wrong!. Please refresh the page')
        }
     });
  }
}
