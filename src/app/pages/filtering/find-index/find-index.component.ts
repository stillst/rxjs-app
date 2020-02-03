import { Component } from '@angular/core';

import { Observable, interval, from  } from 'rxjs';
import { findIndex } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-find-index',
  templateUrl: './find-index.component.pug',
})
export class FindIndexComponent {
  source1$: Observable<number> = interval(1000);
  source1: Stream = getStreamObj(this.source1$, `interval(1000)`);
  result1: Stream = getStreamObj(
    this.source1$.pipe(findIndex(x => x % 2 === 0)),
    `interval(1000).pipe(findIndex(x => x % 2 === 0))`,
  );

  source2$ = from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]);
  source2: Stream = getStreamObj(
    this.source2$,
    `from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 },
    { name: 'Alic', age: 45 }])`,
  );
  result2: Stream = getStreamObj(
    this.source2$.pipe(findIndex(x => x.age < 30)),
    `from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 },
    { name: 'Alic', age: 45 }]).pipe(findIndex(x => x.age < 30))`,
  );

  source3$ = from([2, 30, 22, 5, 60, 1]);
  source3: Stream = getStreamObj(this.source3$, `from([2, 30, 22, 5, 60, 1])`);
  result3: Stream = getStreamObj(
    this.source3$.pipe(findIndex(x => x > 30)),
    `from([2, 30, 22, 5, 60, 1]).pipe(findIndex(x => x.age > 30))`,
  );
}
