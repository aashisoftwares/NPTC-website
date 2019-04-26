import { Component, OnInit } from '@angular/core';
import { CarouselComponent, SlideComponent } from 'ngx-bootstrap/carousel/public_api';
import * as cryptojs from 'crypto-js';

import { FormGroup, Validators, FormControl, AbstractControl, FormBuilder, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// ----------- service ---------------
import { AcademicsService } from '../../../services/academics/academics.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  deptlist : any;
  deptArray: any = [];
  constructor( public router: Router,
    private active_route: ActivatedRoute,
    private academicsService: AcademicsService) { 
    this.service();
  }

  ngOnInit() {

   }
   service() { 
     const Data = {type:'test'}
     this.academicsService.departmentList(Data).subscribe(response => {
       console.log(response);
       if(response['status'] === 200) {
         this.deptlist = response['info']
         this.splitArray(this.deptlist,4);
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

}
