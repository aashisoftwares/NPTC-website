import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js';

// ------service -------------//
import { AboutUsService } from '../../../services/about-us/about-us.service';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.css']
})
export class ApprovalsComponent implements OnInit {
  panelOpenState: boolean;
  data : any;
  aictedata : any;
  antiraggingdata : any;
  womenempowermentdata : any;
  harassmentdata : any;
  aictefileUrl : any;
  antiraggingfileUrl : any;
  womenempowermentfileUrl : any;
  harassmentfileUrl : any;

  constructor( private aboutUsService: AboutUsService) {
     this.service();
   }
  ngOnInit() {
    this.panelOpenState = false;
  }
  service(){
     const Data = { type:'test'};
     
     this.aboutUsService.approvalList(Data).subscribe(response => {
      console.log(response);
       if (response['status'] === 200) {
       this.data = response['info'];       
       } else {
          alert('Something went wrong!. Please refresh the page');
       }
    });


     this.aboutUsService.aicteApprovalList(Data).subscribe(response => {
        console.log(response);
         if (response['status'] === 200) {
         this.aictedata = response['info'];
         this.aictefileUrl = this.aictedata.fileUrl;
         } else {
            alert('Something went wrong!. Please refresh the page');
         }
      });
      this.aboutUsService.antiRaggingCommitteeList(Data).subscribe(response => {
         if (response['status'] === 200) {
         this.antiraggingdata = response['info'];
         this.antiraggingfileUrl = this.antiraggingdata.fileUrl;
         } else {
            alert('Something went wrong!. Please refresh the page');
         }
      });
      this.aboutUsService.womenEmpowermentCellList(Data).subscribe(response => {
         if (response['status'] === 200) {
         this.womenempowermentdata = response['info'];
         this.womenempowermentfileUrl = this.womenempowermentdata.fileUrl;
         } else {
            alert('Something went wrong!. Please refresh the page');
         }
      });
      this.aboutUsService.harassmentRedressalCommitteeList(Data).subscribe(response => {
         if (response['status'] === 200) {
         this.harassmentdata = response['info'];
         this.harassmentfileUrl = this.harassmentdata.fileUrl;
         } else {
            alert('Something went wrong!. Please refresh the page');
         }
      });
  }
}
