import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js';

// ------ service ---------//
import { AmenitiesAndFacilitiesService } from '../../services/amenitiesAndFacilities/amenities-and-facilities.service'
@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
   panelOpenState: boolean;
   hosteldata : any;
   hostelimageUrl : any;
   librarydata : any;
   libraryimageUrl : any;
   physicaleducationdata : any;
   physicaleducationimageUrl : any
   sgsdata : any;
   sgsimageUrl : any;
   nccdata : any;
   nccimageUrl : any;
   nssdata : any;
   nssimageUrl : any;
   iipcdata : any;
   iipcimageUrl : any;
   educationdata : any;
   educationimageUrl : any;
   rrcdata : any;
   rrcimageUrl : any;
   emdcdata : any;
   emdcimageUrl : any;
   istedata : any;
   isteimageurl : any;
   yrcdata : any;
   yrcimageUrl : any;
   cdtpdata : any;
   cdtpimageUrl : any;
  constructor( private amenitiesFacilitiesService: AmenitiesAndFacilitiesService ) {
     this.service();
   }

  ngOnInit() {
    this.panelOpenState = false;
  }
  service(){
     const Data = {type:'test'};
     this.amenitiesFacilitiesService.hostelList(Data).subscribe(response => {
        if(response['status'] === 200){
         this.hosteldata = response['info']
         this.hostelimageUrl = this.hosteldata.imageUrl
        }
        else{
           alert('Something went wrong!. Please refresh the page')
        }
     });
     this.amenitiesFacilitiesService.libraryList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.librarydata = response['info']
       this.libraryimageUrl = this.librarydata.imageUrl
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.physicalEducationList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.physicaleducationdata = response['info']
       this.physicaleducationimageUrl = this.physicaleducationdata.imageUrl
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.sgsList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.sgsdata = response['info']
       this.sgsimageUrl = this.sgsdata.imageUrl
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.nccList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.nccdata = response['info']
       this.nccimageUrl = this.nccdata.imageUrl
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.nssList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.nssdata = response['info']
       this.nssimageUrl = this.nssdata.imageUrl
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.iipcList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.iipcdata = response['info']
       this.iipcimageUrl = this.iipcdata.imageUrl
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.educationCenterList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.educationdata = response['info']
       this.educationimageUrl = this.educationdata.imageUrl
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.redRibbonClubList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.rrcdata = response['info']
       this.rrcimageUrl = this.rrcdata.imageUrl
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.emdcList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.emdcdata = response['info']
       this.emdcimageUrl = this.emdcdata.imageUrl
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.isteList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.istedata = response['info']
       this.isteimageurl = this.istedata.imageUrl
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.youthRedCrossList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.yrcdata = response['info']
       this.yrcimageUrl = this.yrcdata.imageUrl
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.cdtpList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.cdtpdata = response['info']
       this.cdtpimageUrl = this.cdtpdata.imageUrl
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
  }
}
