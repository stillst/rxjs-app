import { Component } from '@angular/core';

import { Observable, interval, from, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.pug',
})
export class TakeUntilComponent {
  source1$: Observable<number> = interval(1000);
  source1: Stream = getStreamObj(this.source1$, `interval(1000)`);
  source2$ = timer(6000);
  source2: Stream = getStreamObj(this.source2$, `timer(6000)`);
  result1: Stream = getStreamObj(
    this.source1$.pipe(takeUntil(timer(6000))),
    `interval(1000).pipe(takeUntil(timer(6000)))`
  );

  source3$ = from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]);
  source3: Stream = getStreamObj(
    this.source3$,
    `from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }])`,
  );
  result2: Stream = getStreamObj(
    this.source3$.pipe(takeUntil(this.source2$)),
    `from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 },
    { name: 'Alic', age: 45 }]).pipe(takeUntil(timer(6000)))`,
  );
}
