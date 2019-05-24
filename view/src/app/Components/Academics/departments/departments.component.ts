import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as cryptojs from 'crypto-js';

// ------- service ----------//
import { AcademicsService } from '../../../services/academics/academics.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  panelOpenState: boolean;
  streamdata: any;
  departmentid: any;
  streamid : any;
  deptlist: any = [];
  depatmntLoader: Boolean = true;
  departmentlist : any;
  activeStream: any;
  constructor( private academicsService: AcademicsService, private router: Router) {
    this.service();
   }

  ngOnInit() {
    this.panelOpenState = false;
  }
  service() {
    const Data = { type: 'test'};
    this.academicsService.streamList(Data).subscribe(response => {
      if (response['status'] === 200) {
        this.streamdata = response['info'];
        this.changestream(this.streamdata[0], 0);
      } else {
        alert('Something went wrong!. Please refresh the page')
      }
    });       
    this.academicsService.departmentList(Data).subscribe(response => {
      if(response['status'] === 200) { 
        this.departmentlist = response['info']
      } else {
        alert('Something went wrong!. Please refresh the page')
      }
    }); 
  }
  changestream(data, i) {
    this.deptlist = []; 
    this.depatmntLoader = true;
    this.activeStream = i;
    this.academicsService.departmentListFilterByStream({streamID: data._id}).subscribe(response => {
      if (response['status'] === 200) {
         this.deptlist = response['info'];
         this.depatmntLoader = false;
       } else {
         alert('Something went wrong!. Please refresh the page')
       }
    });
  }
}
