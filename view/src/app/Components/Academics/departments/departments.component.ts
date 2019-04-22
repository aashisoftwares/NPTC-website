import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  panelOpenState: boolean;

  constructor() { }

  ngOnInit() {
    this.panelOpenState = false;
  }

}
