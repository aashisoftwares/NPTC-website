import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js'

// service //
import { AboutUsService } from '../../../services/about-us/about-us.service';

@Component({
  selector: 'app-vision-mission',
  templateUrl: './vision-mission.component.html',
  styleUrls: ['./vision-mission.component.css']
})
export class VisionMissionComponent implements OnInit {
   visiondata : any;
   missiondata : any;
   managementdata : any;
  constructor( private aboutService: AboutUsService) {
     this.service();
   }

  ngOnInit() {
  }
  service() {
   const Data = { type: 'test'};
   this.aboutService.visionList(Data).subscribe(response => {
      if (response['status'] === 200) {
      this.visiondata = response['info'];
      } else {
         alert('Something went wrong!. Please refresh the page');
      }
   });
   this.aboutService.missionList(Data).subscribe(response => {
      if (response['status'] === 200) {
      this.missiondata = response['info'];
      } else {
         alert('Something went wrong!. Please refresh the page');
      }
   });
   this.aboutService.managementAdminList(Data).subscribe(response => {
      if (response['status'] === 200) {
      this.managementdata = response['info'];
      } else {
         alert('Something went wrong!. Please refresh the page');
      }
   });
}
}
