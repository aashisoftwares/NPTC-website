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
   librarydata : any;
   physicaleducationdata : any;
   sgsdata : any;
   nccdata : any;
   nssdata : any;
   iipcdata : any;
   educationdata : any;
   rrcdata : any;
   emdcdata : any;
   istedata : any;
   yrcdata : any;
   cdtpdata : any;
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
        }
        else{
           alert('Something went wrong!. Please refresh the page')
        }
     });
     this.amenitiesFacilitiesService.libraryList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.librarydata = response['info']
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.physicalEducationList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.physicaleducationdata = response['info']
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.sgsList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.sgsdata = response['info']
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.nccList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.nccdata = response['info']
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.nssList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.nssdata = response['info']
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.iipcList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.iipcdata = response['info']
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.educationCenterList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.educationdata = response['info']
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.redRibbonClubList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.rrcdata = response['info']
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.emdcList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.emdcdata = response['info']
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.isteList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.istedata = response['info']
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.youthRedCrossList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.yrcdata = response['info']
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
   this.amenitiesFacilitiesService.cdtpList(Data).subscribe(response => {
      if(response['status'] === 200){
       this.cdtpdata = response['info']
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
  }
}
