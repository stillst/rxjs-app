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
  result1: Stream = getStreamObj(this.sub,
    `Подписываемя сразу, доходят только последние выстрелы перед завершением потока`);
  result2: Stream = getStreamObj(
    this.sub,
    `Подписываемя через 2000, доходят только последние выстрелы перед завершением потока`,
    '',
    false,
  2000);

  ngOnInit(): void {
    this.sub.next(0);
    setTimeout(() => this.sub.next(1), 500);
    setTimeout(() => this.sub.next(2), 1000);
    setTimeout(() => this.sub.next(3), 2000);
    setTimeout(() => this.sub.next(4), 3000);
    setTimeout(() => this.sub.next(5), 4000);
    setTimeout(() => this.sub.complete(), 5000);
  }
}
