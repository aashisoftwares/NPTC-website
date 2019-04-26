import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js';

// ------ service ------------ //
import { LifeAtNptcService } from '../../../services/lifeAtNptc/life-at-nptc.service';
import { AcademicsService } from '../../../services/academics/academics.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
   data : any;
   departmentlist : any;
  constructor(private lifeAtNpcService: LifeAtNptcService, private academicsService: AcademicsService) { 
     this.service();
  }

  ngOnInit() {
  }
  service(){
     const Data = { type : 'test'};
     this.lifeAtNpcService.facultyAndStaffList(Data).subscribe(response => {
        console.log(response);
        if(response['status'] === 200){
           this.data = response['info']
        }
        else{
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
}
