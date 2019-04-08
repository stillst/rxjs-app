import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.pug',
})
export class ReplaySubjectComponent implements OnInit {
  sub = new ReplaySubject(11);
  result1: Stream = getStreamObj(this.sub,
    `Подписываемя сразу, начально значение 11, доходят только выстрелы после начального`
  );
  result2: Stream = getStreamObj(
    this.sub,
    `Подписываемя через 2000, доходят все выстрелы, кроме начального`,
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
