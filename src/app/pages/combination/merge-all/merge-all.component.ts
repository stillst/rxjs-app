import { Component } from '@angular/core';
import { Observable, interval, fromEvent } from 'rxjs';
import { map, mergeAll, take, concatMap } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-merge-all',
  templateUrl: './merge-all.component.pug',
})
export class MergeAllComponent {
  source1$ = fromEvent(document, 'click');
  source2$: Observable<number> = interval(1000).pipe(take(3));
  // source3$ = this.source1$.pipe(map(() => interval(1000).pipe(take(3))));
  source4$ = this.source1$.pipe(concatMap(() => interval(1000).pipe(take(3))));

  source1: Stream = getStreamObj(this.source1$, `fromEvent(document, 'click')`);
  source2: Stream = getStreamObj(this.source2$, `interval(1000).pipe(take(3)`);
  // source3: Stream = getStreamObj(this.source3$, `fromEvent(document, 'click').pipe(map(interval(1000).pipe(take(3)))`);
  source4: Stream = getStreamObj(this.source4$, `fromEvent(document, 'click').pipe(map(interval(1000).pipe(take(3)))`);

  // result1$ = mergeAll(this.source1$, this.source2$, this.source3$);
  // result1: Stream = getStreamObj(this.result1$,
  // `mergeAll(
  //   interval(2000).pipe(mapTo('1')),
  //   interval(3000).pipe(mapTo('2'))),
  //   interval(1000).pipe(mapTo('3')),
  //   `,
  // `concat as static method`);
}
