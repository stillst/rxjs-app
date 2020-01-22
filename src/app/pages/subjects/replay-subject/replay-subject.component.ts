import { Component, OnInit } from '@angular/core';

import { ReplaySubject } from 'rxjs';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.pug',
})
export class ReplaySubjectComponent implements OnInit {
  sub = new ReplaySubject();
  result1: Stream = getStreamObj(this.sub,
    `Подписываемся сразу`
  );
  result2: Stream = getStreamObj(
    this.sub,
    `Подписываемся через 4 секунды`,
    '',
    false,
    4000,
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
