import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js';

// service

import { AboutUsService } from '../../../services/about-us/about-us.service';

@Component({
  selector: 'app-about-overview',
  templateUrl: './about-overview.component.html',
  styleUrls: ['./about-overview.component.css']
})
export class AboutOverviewComponent implements OnInit {
  data: any;
  tempimage: any = 'http://192.168.1.103:5500/api/uploads/about/image_1555932229382.png';

  constructor( private aboutUsService: AboutUsService) {
     this.service();
  }

  ngOnInit() {
  }
   service() {
      const Data = { type: 'test'};
      this.aboutUsService.aboutList(Data).subscribe(response => {
         if (response['status'] === 200) {
         this.data = response['info'];
         } else {
            alert('Something went wrong!. Please refresh the page');
         }

      });
   }
}
