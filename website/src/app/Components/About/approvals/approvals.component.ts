import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.css']
})
export class ApprovalsComponent implements OnInit {
  panelOpenState: boolean;

  constructor() { }

  ngOnInit() {
    this.panelOpenState = false;
  }

}
