import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js';

// ----- service -------------//

import { LifeAtNptcService } from '../../../services/lifeAtNptc/life-at-nptc.service';


@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
   careercontent : any;   
  constructor( private lifeAtNptcService: LifeAtNptcService) {
     this.service();
   }

  ngOnInit() {
  }
  service() {
     const Data = {type:'test'};
     this.lifeAtNptcService.careerList(Data).subscribe(response => {
        console.log(response);
      if(response['status'] === 200) {
         this.careercontent = response['info']
      } else {
         alert('SOmething went wrong!. Please refresh the page')
      }
     })
  }

}
