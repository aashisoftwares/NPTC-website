import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js';

// ------ service ----------//
import { AboutUsService } from '../../../services/about-us/about-us.service';
@Component({
  selector: 'app-institution-organogram',
  templateUrl: './institution-organogram.component.html',
  styleUrls: ['./institution-organogram.component.css']
})
export class InstitutionOrganogramComponent implements OnInit {
   data : any;
   imageUrl : any;
  constructor( private aboutUsService: AboutUsService) { 
     this.service();
  }

  ngOnInit() {
  }
  service() {
   const Data = { type: 'test'};
   this.aboutUsService.organogramList(Data).subscribe(response => {
      if (response['status'] === 200) {
      this.data = response['info'];
      this.imageUrl = this.data.imageUrl
      } else {
         alert('Something went wrong!. Please refresh the page');
      }
      });
   }  
}
