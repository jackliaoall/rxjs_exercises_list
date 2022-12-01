import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // map(x => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));
    // first()(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));
  }

}
