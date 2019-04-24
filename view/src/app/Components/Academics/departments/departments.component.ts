import { Component, OnInit } from '@angular/core';
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
  deptlist: any;

  constructor( private academicsService: AcademicsService) {
    this.service();
   }

  ngOnInit() {
    this.panelOpenState = false;
  }
  service() {
    const Data = { type: 'test'};
    this.academicsService.streamList(Data).subscribe(response => {
      console.log(response);
      if (response['status'] === 200) {
        this.streamdata = response['info'];
      } else {
        alert('Something went wrong!. Please refresh the page')
      }
    });    
  }
  changestream(data) {
    console.log(data);
    this.streamid = data._id;    
    const info = { streamID : this.streamid}
    this.academicsService.departmentListfilterbystream({'info':info}).subscribe(response => {
      console.log(response);
    //   if (response['status'] === 200) {
    //     this.deptlist = response['info'];
    //     console.log(this.deptlist);
    //   } else {
    //     alert('Something went wrong!. Please refresh the page')
    //   }
    });    
  }
}
