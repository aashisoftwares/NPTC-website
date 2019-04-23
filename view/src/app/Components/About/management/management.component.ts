import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js';

//  --------- service -------//
import { AboutUsService } from '../../../services/about-us/about-us.service';
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
   founderdata : any;
   founderimageUrl : any;
   chairmandata : any;
   chairmanimageUrl : any;
   correspondentdata : any;
   correspondentimageUrl : any;
   secretarydata : any;
   secretaryimageUrl : any;
   principaldata : any;
   principalimageUrl : any;
  constructor( private aboutUsService: AboutUsService) {
     this.service();
   }

  ngOnInit() {
  }
  service(){
     const Data = {type:'test'}
      this.aboutUsService.founderList(Data).subscribe(response => {
         if(response['status']===200){
            this.founderdata = response['info']
            this.founderimageUrl = this.founderdata.imageUrl
         }
         else{
            alert('Something went wrong!. Please refresh the page');
         }
      });
      this.aboutUsService.chairmanList(Data).subscribe(response => {
         if(response['status']===200){
            this.chairmandata = response['info']
            this.chairmanimageUrl = this.chairmandata.imageUrl
         }
         else{
            alert('Something went wrong!. Please refresh the page');
         }
      });
      this.aboutUsService.correspondentList(Data).subscribe(response => {
         if(response['status']===200){
            this.correspondentdata = response['info']
            this.correspondentimageUrl = this.correspondentdata.imageUrl
         }
         else{
            alert('Something went wrong!. Please refresh the page');
         }
      });
      this.aboutUsService.secretaryList(Data).subscribe(response => {
         if(response['status']===200){
            this.secretarydata = response['info']
            this.secretaryimageUrl = this.secretarydata.imageUrl
         }
         else{
            alert('Something went wrong!. Please refresh the page');
         }
      });
      this.aboutUsService.principalList(Data).subscribe(response => {
         if(response['status']===200){
            this.principaldata = response['info']
            this.principalimageUrl = this.principaldata.imageUrl
         }
         else{
            alert('Something went wrong!. Please refresh the page');
         }
      });
  }

}
