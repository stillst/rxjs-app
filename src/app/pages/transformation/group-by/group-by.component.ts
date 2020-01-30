import { Component } from '@angular/core';

import { Observable, from } from 'rxjs';
import {
  groupBy, mergeMap, toArray, reduce, map, // tap
} from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-group-by',
  templateUrl: './group-by.component.pug',
})
export class GroupByComponent {
  source1$: Observable<{ name: string, age: number }> = from([
    { name: 'Sue', age: 25 },
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 25 },
    { name: 'Sarah', age: 35 }
  ]);
  source1: Stream = getStreamObj(this.source1$, `from([
    { name: 'Sue', age: 25 },
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 25 },
    { name: 'Sarah', age: 35 }
  ])`);
  result1: Stream = getStreamObj(this.source1$.pipe(
      groupBy(person => person.age),
      mergeMap(group => group.pipe(toArray())),
      // tap(x => console.log('x', x)),
    ), `from([
    { name: 'Sue', age: 25 },
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 25 },
    { name: 'Sarah', age: 35 }
  ]).pipe(
      groupBy(person => person.age),
      mergeMap(group => group.pipe(toArray()))
    )`);

  source2$ = from([
    { id: 1, name: 'javascript' },
    { id: 2, name: 'parcel' },
    { id: 2, name: 'webpack' },
    { id: 1, name: 'typescript' },
    { id: 3, name: 'tslint' }
  ]);
  source2: Stream = getStreamObj(this.source2$, `
  from([
    { id: 1, name: 'javascript' },
    { id: 2, name: 'parcel' },
    { id: 2, name: 'webpack' },
    { id: 1, name: 'typescript' },
    { id: 3, name: 'tslint' }
  ])`);

  result2: Stream = getStreamObj(
    this.source2$.pipe(
      groupBy(p => p.id, p => p.name),
      mergeMap( (group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], ['' + group$.key]))),
      map((arr: any) => ({'id': arr[0], 'values': arr.slice(1)})),
    ),
    `from([
      { id: 1, name: 'javascript' },
      { id: 2, name: 'parcel' },
      { id: 2, name: 'webpack' },
      { id: 1, name: 'typescript' },
      { id: 3, name: 'tslint' }
    ]).pipe(
      groupBy(p => p.id, p => p.name),
      mergeMap( (group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], ['' + group$.key]))),
      map((arr: any) => ({'id': arr[0], 'values': arr.slice(1)})),
    )`
  );
}
