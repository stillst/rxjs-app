import { Component } from '@angular/core';

import { Observable, of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.pug',
})
export class DistinctUntilChangedComponent {
  source1$: Observable<number> = of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1);
  source1: Stream = getStreamObj(
    this.source1$,
    `of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)`,
  );
  result1: Stream = getStreamObj(
    this.source1$.pipe(distinctUntilChanged()),
    `interval(500).pipe(debounceTime(1000))`,
  );

  oneObj = { age: 4, name: 'Foo'};
  twoObj = { age: 7, name: 'Bar'};
  source2$: Observable<{age: number, name: string}> = of(
    this.oneObj,
    this.twoObj,
    this.twoObj,
    { age: 7, name: 'Bar'},
    { age: 7, name: 'Bar'},
    this.oneObj,
    this.oneObj,
    this.twoObj,
  );
  source2: Stream = getStreamObj(
    this.source2$,
    `this.oneObj, this.twoObj, this.twoObj, { age: 7, name: 'Bar'},
    { age: 7, name: 'Bar'}, this.oneObj, this.oneObj, this.twoObj,`,
    'Объекты сравниваются по ссылке',
  );
  result2: Stream = getStreamObj(
    this.source2$.pipe(distinctUntilChanged()),
    `distinctUntilChanged()`
  );

  source3$ = of<{age: number, name: string}>(
    { age: 4, name: 'Foo'},
    { age: 7, name: 'Bar'},
    { age: 5, name: 'Foo'},
    { age: 6, name: 'Foo'},
  );
  source3: Stream = getStreamObj(
    this.source3$,
    `of<{age: number, name: string}>({ age: 4, name: 'Foo'},
    { age: 7, name: 'Bar'}, { age: 5, name: 'Foo'}, { age: 6, name: 'Foo'})`,
  );
  result3: Stream = getStreamObj(
    this.source3$.pipe(distinctUntilChanged((p, q) => p.name === q.name)),
      `distinctUntilChanged((p, q) => p.name === q.name)`
  );
}
