import { Component } from '@angular/core';
import { Observable, interval, from  } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.pug',
})
export class FilterComponent {
  source1$: Observable<number> = interval(1000);
  source1: Stream = getStreamObj(this.source1$, `interval(1000)`);
  result1: Stream = getStreamObj(this.source1$.pipe(filter(x => x % 2 === 0)), `interval(1000).pipe(filter(x => x % 2 === 0))`);

  source2$ = from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]);
  source2: Stream = getStreamObj(this.source2$, `from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }])`);
  result2: Stream = getStreamObj(this.source2$.pipe(filter(x => x.age > 30)), `
    from([{ name: 'Joe', age: 31 }, { name: 'Bob', age: 25 }, { name: 'Alic', age: 45 }]).pipe(filter(x => x.age > 30))
  `);

  source3$: Observable<number> = interval(1000);
  source3: Stream = getStreamObj(this.source1$, `interval(1000)`);
  result3: Stream = getStreamObj(
    this.source1$.pipe(filter((x, index) => index >= 5)),
    `interval(1000).pipe(filter((x, index) => index >= 5)`,
    'skip first 5 elements (better use skip)'
  );
}
