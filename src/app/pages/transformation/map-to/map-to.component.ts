import { Component } from '@angular/core';
import { Observable, fromEvent, from } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.pug',
})
export class MapToComponent {
  source1$: Observable<number> = from([1, 2, 3, 4, 5]);
  source1: Stream = getStreamObj(this.source1$, `from([1, 2, 3, 4, 5])`);

  result1: Stream = getStreamObj(
    this.source1$.pipe(mapTo(11)),
    `interval(5000).pipe(mapTo(11))`
  );

  source2$: Observable<{name: string, age: number}> = from([
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 20 },
    { name: 'Ryan', age: 50 }
  ]);
  source2: Stream = getStreamObj(this.source2$, `from([
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 20 },
    { name: 'Ryan', age: 50 }
  ]);`);

  result2: Stream = getStreamObj(
    this.source2$.pipe(mapTo('name')),
    `from([
      { name: 'Joe', age: 30 },
      { name: 'Frank', age: 20 },
      { name: 'Ryan', age: 50 }
    ]).mapTo('name')`
  );

  source3$ = fromEvent(document, 'click');
  source3: Stream = getStreamObj(this.source3$, `fromEvent(document, 'click')`);
  result3: Stream = getStreamObj(
    this.source3$.pipe(mapTo('click')),
    `fromEvent(document, 'click').pipe(mapTo('click'))`
  );
}
