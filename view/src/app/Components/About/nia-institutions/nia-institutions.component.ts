import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js';

// --------- service -----------//
import { AboutUsService } from '../../../services/about-us/about-us.service';

@Component({
  selector: 'app-nia-institutions',
  templateUrl: './nia-institutions.component.html',
  styleUrls: ['./nia-institutions.component.css']
})
export class NiaInstitutionsComponent implements OnInit {
   enlightendata : any;
   collegedata : any;
   schooldata : any;
   socialactivitydata : any;
   schoolimageUrl : any;
   collegeimageUrl : any;
   socialActivityimageUrl : any;
  constructor( private aboutUsService: AboutUsService ) {
     this.service();
   }

  ngOnInit() {
  }
  service()
  {
     const Data  = { type: 'test'}
     this.aboutUsService.enlightenTEList(Data).subscribe(response => {
        console.log(response);
      if (response['status'] === 200) {
      this.enlightendata = response['info'];
      } else {
         alert('Something went wrong!. Please refresh the page');
      }
   });
   this.aboutUsService.collegesList(Data).subscribe(response => {
      console.log(response);
      if (response['status'] === 200) {
      this.collegedata = response['info'];
      } else {
         alert('Something went wrong!. Please refresh the page');
      }
   });
   this.aboutUsService.schoolsList(Data).subscribe(response => {
      console.log(response);
      if (response['status'] === 200) {
      this.schooldata = response['info'];
      } else {
         alert('Something went wrong!. Please refresh the page');
      }
   });
   this.aboutUsService.socialDAList(Data).subscribe(response => {
      console.log(response);
      if (response['status'] === 200) {
      this.socialactivitydata = response['info'];
      } else {
         alert('Something went wrong!. Please refresh the page');
      }
   });
  }
}
