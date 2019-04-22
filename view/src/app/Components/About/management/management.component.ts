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
  constructor() { }

  ngOnInit() {
  }

}
