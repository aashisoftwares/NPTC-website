import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js';

// ------ service ------------ //
import { LifeAtNptcService } from '../../../services/lifeAtNptc/life-at-nptc.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
   data : any;
  constructor(private lifeAtNpcService: LifeAtNptcService) { 
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
  }
}
