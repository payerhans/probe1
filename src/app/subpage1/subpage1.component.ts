import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-subpage1',
  templateUrl: './subpage1.component.html',
  styleUrls: ['./subpage1.component.css'],

  animations:[
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),

      transition('small <=> large', animate('300ms ease-in')),
    ]),
  ],

  
})
export class Subpage1Component implements OnInit {

  state: string = "small";
 

  constructor() { }

  ngOnInit() {
  }
  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

}
