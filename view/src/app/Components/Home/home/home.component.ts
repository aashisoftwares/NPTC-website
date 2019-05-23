import { Component, OnInit } from '@angular/core';
import { CarouselComponent, SlideComponent } from 'ngx-bootstrap/carousel/public_api';
import * as cryptojs from 'crypto-js';

import { FormGroup, Validators, FormControl, AbstractControl, FormBuilder, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { FileSaverService } from 'ngx-filesaver';


// ----------- service ---------------
import { AcademicsService } from '../../../services/academics/academics.service';
import { HomeService} from '../../../services/home.service';
import { AboutUsService} from '../../../services/about-us/about-us.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  deptlist : any;
  deptArray: any = [];
  welcomeList : any;
  admissioncontent : any;
  admissionfileUrl : any;
  councilcontent : any;
  countList: any;
  mgmtContent : any;
  founderdata : any;
  chairmandata : any;
  corresdata : any;
  principaldata : any;
  secretarydata : any;
  founderimageUrl : any;
  correspondentimageUrl : any;
  secretaryimageUrl : any;
  principalimageUrl : any;
  chairmanimageUrl : any;
  sliderTitle : any;
  sliderContent : any;
  sliderimageUrl : any;
  recruitersdata : any;
  recruiterimageUrl : any;
  recruitersArray: any = [];
   chairmanEmritusdata: any;
   chairmanEmritusimageUrl: any;
  constructor( public router: Router,
    private active_route: ActivatedRoute,
    private academicsService: AcademicsService,
    private homeService: HomeService,
    private aboutUsService: AboutUsService,
    private _httpClient: HttpClient,
   private _FileSaverService: FileSaverService) { 
    this.service();
  }

  ngOnInit() {

   }
   service() { 
     const Data = {type:'test'}
     this.academicsService.departmentList(Data).subscribe(response => {
       if(response['status'] === 200) {
         this.deptlist = response['info'];
         console.log(this.deptlist);
         this.splitArray(this.deptlist,4);
       } else {
         alert('something went wrong!. please refresh the page')
       }
     });
     this.homeService.welcomeList(Data).subscribe(response => {      
      if(response['status'] === 200) {
        this.welcomeList = response['info']
      } else {
        alert('something went wrong!. please refresh the page')
      }
    });
    this.homeService.admissionList(Data).subscribe(response => {      
      if(response['status'] === 200) {
        this.admissioncontent = response['info']
        this.admissionfileUrl = this.admissioncontent.fileUrl;
      } else {
        alert('something went wrong!. please refresh the page')
      }
    });
    this.homeService.councilList(Data).subscribe(response => {      
      if(response['status'] === 200) {
        this.councilcontent = response['info']
      } else {
        alert('something went wrong!. please refresh the page')
      }
    });
    this.aboutUsService.countList(Data).subscribe(response => {      
      if(response['status'] === 200) {
        this.countList = response['info']
      } else {
        alert('something went wrong!. please refresh the page')
      }
    });
    this.homeService.sliderList(Data).subscribe(response => {   
      if(response['status'] === 200) {
        this.sliderContent = response['info']
        this.sliderimageUrl = this.sliderContent.imageurl
      } else {
        alert('something went wrong!. please refresh the page')
      }
    });
    this.homeService.recruitersList(Data).subscribe(response => {   
      if(response['status'] === 200) {
        this.recruitersdata = response['info']
        this.recruiterimageUrl = this.recruitersdata.imageurl
        this.splitrecruitersArray(this.recruitersdata,4);
      } else {
        alert('something went wrong!. please refresh the page')
      }
    });
    this.aboutUsService.founderList(Data).subscribe(response => {      
      if(response['status'] === 200) {
        this.founderdata = response['info']
        this.founderimageUrl = this.founderdata.imageUrl
      } else {
        alert('something went wrong!. please refresh the page')
      }
    });
    this.aboutUsService.chairmanList(Data).subscribe(response => {      
      if(response['status'] === 200) {
        this.chairmandata = response['info']
        this.chairmanimageUrl = this.chairmandata.imageUrl
      } else {
        alert('something went wrong!. please refresh the page')
      }
    });
    this.aboutUsService.chairmanEmritusList(Data).subscribe(response => {      
      if(response['status'] === 200) {
        this.chairmanEmritusdata = response['info']
        this.chairmanEmritusimageUrl = this.chairmanEmritusdata.imageUrl
      } else {
        alert('something went wrong!. please refresh the page')
      }
    });
    this.aboutUsService.correspondentList(Data).subscribe(response => {      
      if(response['status'] === 200) {
        this.corresdata = response['info']
        this.correspondentimageUrl = this.corresdata.imageUrl
      } else {
        alert('something went wrong!. please refresh the page')
      }
    });
    this.aboutUsService.secretaryList(Data).subscribe(response => {      
      if(response['status'] === 200) {
        this.secretarydata = response['info']
        this.secretaryimageUrl = this.secretarydata.imageUrl
      } else {
        alert('something went wrong!. please refresh the page')
      }
    });
    this.aboutUsService.principalList(Data).subscribe(response => {      
      if(response['status'] === 200) {
        this.principaldata = response['info']
        this.principalimageUrl = this.principaldata.imageUrl
      } else {
        alert('something went wrong!. please refresh the page')
      }
    });
    }
     splitArray(arrayData,size) {
      let arrayLength = arrayData.length;
      for (let i = 0; i < arrayLength; i+=size) {
         this.deptArray.push(this.deptlist.slice(i, i+size))            
      }
     }   
     splitrecruitersArray(arrayData,size) {
      let arrayLength = arrayData.length;
      for (let i = 0; i < arrayLength; i+=size) {
         this.recruitersArray.push(this.recruitersdata.slice(i, i+size))            
      }
     } 
     
     download(url: string) {
         this._httpClient.get(url, {
         observe: 'response',
         responseType: 'blob'
         }).subscribe(res => {
            this._FileSaverService.save(res.body, "file.pdf");
         });
      }
}
