import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.pug',
})
export class AsyncSubjectComponent implements OnInit {
  sub = new AsyncSubject();
  result1: Stream = getStreamObj(
    this.sub,
    `Подписываемся сразу, доходит только последний выстрел, перед завершением потока`,
  );

  result2: Stream = getStreamObj(
    this.sub,
    `Подписываемся через 2000, доходит только последний выстрел, перед завершением потока`,
    '',
    false,
    2000,
  );

  result3: Stream = getStreamObj(
    this.sub,
    `Подписываемся через 8000, доходит только последний выстрел, перед завершением потока`,
    '',
    false,
    8000,
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
