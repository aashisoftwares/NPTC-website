import { Component, OnInit } from '@angular/core';
import * as cryptojs from 'crypto-js';

// ------ service  ----------------//
import { PlacementsService } from '../../../services/placements/placements.service';
@Component({
  selector: 'app-about-placement',
  templateUrl: './about-placement.component.html',
  styleUrls: ['./about-placement.component.css']
})
export class AboutPlacementComponent implements OnInit {
   placementdata : any;

  constructor( private placementService: PlacementsService ) {
     this.service();
   }

  ngOnInit() {
  }
  service() {
     const Data = {type:'test'};
     this.placementService.placementsList(Data).subscribe(response => {
      if(response['status'] === 200){
         this.placementdata = response['info']
      }
      else{
         alert('Something went wrong!. Please refresh the page')
      }
   });
  }
}
