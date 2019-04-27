import { Component, OnInit } from '@angular/core';
import { TimelineEvent } from 'ngx-timeline';
@Component({
  selector: 'app-milestones',
  templateUrl: './milestones.component.html',
  styleUrls: ['./milestones.component.css']
})
export class MilestonesComponent implements OnInit {
  events: Array<TimelineEvent>;
  constructor() { }

  ngOnInit() {
    this.events = new Array<TimelineEvent>();
    this.events.push({ "date": new Date(), "header": "test", "body": "aaa", "icon": "fa-github" });
    this.events.push({ "date": new Date(), "header": "WeUI", "body": "Test" });
    this.events.push({ "date": new Date(), "header": "aaa", "body": "sample" });
  }

}
