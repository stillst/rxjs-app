import { Component } from '@angular/core';

import { Observable, fromEvent, from } from 'rxjs';
import { pluck, filter } from 'rxjs/operators';
import { compose, not, isNil } from 'ramda';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.pug',
})
export class PluckComponent {
  source1$: Observable<{name: string, age: number}> = from([
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 20 },
    { name: 'Ryan', age: 50 }
  ]);
  source1: Stream = getStreamObj(this.source1$, `from([
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 20 },
    { name: 'Ryan', age: 50 }
  ]);`);
  result1: Stream = getStreamObj(
    this.source1$.pipe(pluck('name')),
    `from([
      { name: 'Joe', age: 30 },
      { name: 'Frank', age: 20 },
      { name: 'Ryan', age: 50 }
    ]).pluck('name'))`
  );

  source2$ = fromEvent(document, 'click');
  source2: Stream = getStreamObj(this.source2$, `fromEvent(document, 'click')`);
  result2: Stream = getStreamObj(
    this.source2$.pipe(pluck('clientX')),
    `fromEvent(document, 'click').pipe(pluck('clientX'))`
  );

  source3$ = from([
    { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
    { name: 'Sarah', age: 35 }
  ]);
  source3: Stream = getStreamObj(this.source3$, `from([
    { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
    { name: 'Sarah', age: 35 }
  ])`);
  result3: Stream = getStreamObj(
    this.source3$.pipe(pluck('job', 'title'), filter(compose(not, isNil))),
    `from([
      { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
      { name: 'Sarah', age: 35 }
    ])pipe(pluck('job', 'title'), filter(compose(not, isNil)))`
  );
}
