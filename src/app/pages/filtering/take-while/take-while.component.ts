import { Component } from '@angular/core';

import { Observable, interval, from } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.pug',
})
export class TakeWhileComponent {
  source1$: Observable<number> = interval(1000);
  source1: Stream = getStreamObj(this.source1$, `interval(1000)`);
  result1: Stream = getStreamObj(
    this.source1$.pipe(takeWhile(val => val < 5)),
    `interval(1000).pipe(takeWhile(val => val < 5))`
  );

  source2$ = from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]);
  source2: Stream = getStreamObj(
    this.source2$,
    `from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }])`,
  );
  result2: Stream = getStreamObj(
    this.source2$.pipe(takeWhile(val => val.age > 30)),
    `from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }])
      .pipe(takeWhile(val => val.age > 30))`,
  );

  source3$ = from([2, 30, 22, 5, 60, 1]);
  source3: Stream = getStreamObj(
    this.source3$,
    `from([2, 30, 22, 5, 60, 1])`,
  );
  result3: Stream = getStreamObj(
    this.source3$.pipe(takeWhile(val => val < 50)),
    `from([2, 30, 22, 5, 60, 1]).pipe(takeWhile(val => val < 50))`,
  );
}
