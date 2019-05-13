import { Component } from '@angular/core';
import { Observable, merge, interval } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.pug',
})
export class MergeComponent {
  source1$: Observable<string> = interval(1000).pipe(mapTo('1'));
  source2$: Observable<string> = interval(2000).pipe(mapTo('2'));
  source3$: Observable<string> = interval(3000).pipe(mapTo('3'));

  source1: Stream = getStreamObj(
    this.source1$,
    `interval(1000).pipe(mapTo('1'))`,
    'Поток единиц, стреляет каждую секунду'
  );
  source2: Stream = getStreamObj(
    this.source2$,
    `interval(2000).pipe(mapTo('2'))`,
    'Поток двоек, стреляет раз в две секнуды'
  );
  source3: Stream = getStreamObj(
    this.source3$,
    `interval(3000).pipe(mapTo('3'))`,
    'Поток троек, стреляет раз в 3 секунды'
  );


  result1: Stream = getStreamObj(
    merge(this.source1$, this.source2$, this.source3$),
    `merge(
      interval(1000).pipe(mapTo('1')),
      interval(2000).pipe(mapTo('2'))),
      interval(3000).pipe(mapTo('3')),
    `,
    `Результат объединения`
  );
}
