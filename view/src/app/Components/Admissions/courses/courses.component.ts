import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js';

// ------ service -----------//
import { AcademicsService } from '../../../services/academics/academics.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  programmedata : any;
  constructor( private academicsService: AcademicsService) {
    this.service();
   }

  ngOnInit() {
  }
  service(){
    const Data = { type : 'test'};
    this.academicsService.programmesList(Data).subscribe(response => {
      if(response['status'] === 200) {
        this.programmedata = response['info']
      } else {
        alert('Something went wrong. please refresh the page')
      }
    });
  }
}
