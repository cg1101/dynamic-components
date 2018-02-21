import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-1',
  templateUrl: './exercise-1.component.html',
  styleUrls: ['exercise-1.component.scss'],
})
export class Exercise1Component implements OnInit {

  items = [
    {title: 'Mr. A'},
    {title: 'Mr. B'},
    {title: 'Mr. C'},
    {title: 'Mr. D'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
