import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.pug',
})
export class SubjectComponent implements OnInit {
  sub = new Subject();
  result1: Stream = getStreamObj(
    this.sub,
    `Подписываемся сразу, выстрелы каждую секунду`
  );

  result2: Stream = getStreamObj(
    this.sub,
    `Подписываемся через 2000, первые выстрелы не доходят`,
    '',
    false,
    2000
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
