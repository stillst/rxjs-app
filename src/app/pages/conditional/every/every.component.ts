import { Component, OnInit } from '@angular/core';
import { of, concat } from 'rxjs';
import { every, delay, tap } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-every',
  templateUrl: './every.component.pug',
  styleUrls: ['./every.component.scss']
})
export class EveryComponent {
  source1$ = of(1, 2, 3, 4, 5);
  everyEven1$ = this.source1$.pipe(every(val => val % 2 === 0));
  source1: Stream = getStreamObj(this.source1$, 'of(1, 2, 3, 4, 5)', 'stream of 1, 2, 3, 4, 5');
  result1: Stream = getStreamObj(this.everyEven1$, 'every(val => val % 2 === 0)', 'is every value even?');

  source2$ = of(2, 4, 6, 8, 10);
  everyEven2$ = this.source2$.pipe(every(val => val % 2 === 0));
  source2: Stream = getStreamObj(this.source2$, 'of(2, 4, 6, 8, 10)', 'stream of 2, 4, 6, 8, 10');
  result2: Stream = getStreamObj(this.everyEven2$, 'every(val => val % 2 === 0)', 'is every value even?');

  source3$ = concat(
    this.fakeRequest$(1),
    this.fakeRequest$('invalid payload'),
    this.fakeRequest$(2) // this won't execute as every will return false for previous line
  );

  everyEven3$ = this.source3$.pipe(every(e => e.code === 200));
  source3: Stream = getStreamObj(this.source3$, `concat(
    this.fakeRequest$(1),
    this.fakeRequest$('invalid payload'),
    this.fakeRequest$(2) // this won't execute as every will return false for previous line
  )`, 'stream of request');
  result3: Stream = getStreamObj(this.everyEven3$, 'every(e => e.code === 200)', 'every request succefull');

  returnCode(request: string | number) {
    return Number.isInteger(request as number)
      ? 200
      : 400;
  }

  fakeRequest$(request) {
    return of({ code: this.returnCode(request) })
      .pipe(
        tap(_ => console.log(request)),
        delay(1000)
      );
  }
}
