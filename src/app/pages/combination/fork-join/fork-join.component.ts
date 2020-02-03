import { Component } from '@angular/core';

import { Observable, forkJoin, interval } from 'rxjs';
import { mapTo, take } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.pug',
})
export class ForkJoinComponent {
  source1$: Observable<string> = interval(1000).pipe(mapTo('1'), take(5));
  source2$: Observable<string> = interval(2000).pipe(mapTo('2'), take(3));
  source3$: Observable<string> = interval(3000).pipe(mapTo('3'), take(2));

  source1: Stream = getStreamObj(
    this.source1$,
    `interval(1000).pipe(mapTo('1'), take(5))`,
    'Поток единиц, стреляет каждую секунду'
  );
  source2: Stream = getStreamObj(
    this.source2$,
    `interval(2000).pipe(mapTo('2'), take(3))`,
    'Поток двоек, стреляет раз в две секнуды'
  );
  source3: Stream = getStreamObj(
    this.source3$,
    `interval(3000).pipe(mapTo('3'), take(2))`,
    'Поток троек, стреляет раз в 3 секунды'
  );


  result1: Stream = getStreamObj(
    forkJoin(this.source1$, this.source2$, this.source3$),
    `forkJoin(
      interval(1000).pipe(mapTo('1')),
      interval(2000).pipe(mapTo('2'))),
      interval(3000).pipe(mapTo('3')),
    `,
    `Результат объединения`
  );
}
