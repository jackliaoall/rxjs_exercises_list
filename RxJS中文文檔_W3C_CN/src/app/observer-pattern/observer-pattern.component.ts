import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'observer-pattern',
  templateUrl: './observer-pattern.component.html',
  styleUrls: ['./observer-pattern.component.scss']
})
export class ObserverPatternComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const observer = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
  }

}
