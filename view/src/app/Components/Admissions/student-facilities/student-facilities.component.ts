import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js';

// ------- service ---------//
import { AdmissionService } from '../../../services/admission/admission.service';
@Component({
  selector: 'app-student-facilities',
  templateUrl: './student-facilities.component.html',
  styleUrls: ['./student-facilities.component.css']
})
export class StudentFacilitiesComponent implements OnInit {
   data : any;
  constructor(private admissionService: AdmissionService) { 
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
  }

}
