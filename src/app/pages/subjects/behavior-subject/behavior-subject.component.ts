import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.pug',
})
export class BehaviorSubjectComponent implements OnInit {
  sub = new BehaviorSubject(42);

  result1: Stream = getStreamObj(this.sub,
    `Подписываемся сразу, первое значение 42`
  );
  result2: Stream = getStreamObj(
    this.sub,
    `Подписываемся через 2000, доходят не все выстрелы`,
    '',
    false,
    2000,
  );

  ngOnInit(): void {
    let i = 0;
    const timerId = setInterval(() => {
      i = i + 1;
      this.sub.next(i);
    }, 1000);

    setTimeout(() => {
      clearInterval(timerId);
      this.sub.complete();
    }, 6000);
  }
}
