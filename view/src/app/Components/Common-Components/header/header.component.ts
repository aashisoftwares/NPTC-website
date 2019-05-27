import { Component, OnInit } from '@angular/core';
import {  Router, NavigationStart, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   loader: Boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
   this.loaderToggle();
  }

  loaderToggle() {
   this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
         this.loader = true;
      }
      if (event instanceof NavigationEnd) {
         this.loader = false;
      }
   });
  }


}
