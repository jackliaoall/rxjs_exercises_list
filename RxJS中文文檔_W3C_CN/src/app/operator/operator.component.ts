import { Component, OnInit } from '@angular/core';
import { of, pipe } from 'rxjs';
import { map, first } from 'rxjs/operators';

@Component({
  selector: 'operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (of(1, 2, 3)).pipe(map(x => x * x)).subscribe((v) => console.log(`value: ${v}`));
    (of(1, 2, 3)).pipe(first()).subscribe((v) => console.log(`value: ${v}`));
  }

}
