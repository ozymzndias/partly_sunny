import { Component, OnInit } from '@angular/core';

declare function hamburger(): void;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
    hamburger();
  }

  

}
