import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js';

// ------ service --------//
import { AdmissionService } from '../../../services/admission/admission.service';

@Component({
  selector: 'app-scholarships',
  templateUrl: './scholarships.component.html',
  styleUrls: ['./scholarships.component.css']
})
export class ScholarshipsComponent implements OnInit {
   data : any;
  constructor( private admissionService: AdmissionService) {
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
  }
}
