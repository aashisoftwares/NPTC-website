import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js';

// ----- service -----------//
import { AdmissionService } from '../../../services/admission/admission.service';

@Component({
  selector: 'app-ebrochure',
  templateUrl: './ebrochure.component.html',
  styleUrls: ['./ebrochure.component.css']
})
export class EbrochureComponent implements OnInit {
   data : any;
   brochurefileUrl : any;
  constructor(private admissionService: AdmissionService) {
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
  }
}
