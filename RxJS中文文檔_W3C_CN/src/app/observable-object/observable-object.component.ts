import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'observable-object',
  templateUrl: './observable-object.component.html',
  styleUrls: ['./observable-object.component.scss']
})
export class ObservableObjectComponent implements OnInit {

  public content = '';

  constructor() {}

  ngOnInit(): void {
    let content = '';
    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log('just before subscribe');
    observable.subscribe({
      next(x) { content += 'got value ' + x + '\n'; },
      error(err) { content += ('something wrong occurred: ' + err + '\n'); },
      complete() { content += ('done' + '\n'); }
    });

    console.log('just after subscribe');
    setTimeout(() => {
      this.content = content;
    }, 1000);
  }

}
