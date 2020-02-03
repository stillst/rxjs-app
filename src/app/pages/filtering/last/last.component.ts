import { Component } from '@angular/core';

import { Observable, interval, from  } from 'rxjs';
import { last } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.pug',
})
export class LastComponent {
  source1$: Observable<number> = interval(1000);
  source1: Stream = getStreamObj(this.source1$, `interval(1000)`);
  result1: Stream = getStreamObj(
    this.source1$.pipe(last()),
    `interval(1000).pipe(last())`,
  );

  source2$ = from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]);
  source2: Stream = getStreamObj(
    this.source2$,
    `from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }])`,
  );
  result2: Stream = getStreamObj(this.source2$.pipe(last()), `
    from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]).pipe(last())
  `);

  source3$ = from([2, 30, 22, 5, 60, 1]);
  source3: Stream = getStreamObj(this.source3$, `from([2, 30, 22, 5, 60, 1])`);
  result3: Stream = getStreamObj(
    this.source3$.pipe(last(num => num % 2 === 0)),
    `from([2, 30, 22, 5, 60, 1]).pipe(last(num => num % 2 === 0))`,
    'Последнее значение удовлетворяющее предикату'
  );

  source4$ = from([2, 30, 22, 5, 60, 1]);
  source4: Stream = getStreamObj(this.source4$, `from([2, 30, 22, 5, 60, 1])`);
  result4: Stream = getStreamObj(
    this.source4$.pipe(last(v => v > 70, 'Nothing!')),
    `from([2, 30, 22, 5, 60, 1]).pipe(last(num => num % 2 === 0))`,
    'Последнее значение удовлетворяющее предикату, или Nothing!'
  );
}
