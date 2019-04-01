import { Component } from '@angular/core';
import { interval, fromEvent } from 'rxjs';
import { map, take, concatMap, mergeAll } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-merge-all',
  templateUrl: './merge-all.component.pug',
})
export class MergeAllComponent {
  source1$ = fromEvent(document, 'click');
  source2$ = interval(1000).pipe(take(3));
  source3$ = fromEvent(document, 'click').pipe(map(() => interval(1000).pipe(take(3))));

  source1: Stream = getStreamObj(this.source1$, `fromEvent(document, 'click')`);
  source2: Stream = getStreamObj(this.source2$, `interval(1000).pipe(take(3)`);
  source3: Stream = getStreamObj(this.source3$, `fromEvent(document, 'click').pipe(map(interval(1000).pipe(take(3)))`);

  result1: Stream = getStreamObj(this.source3$.pipe(mergeAll()), `fromEvent(document, 'click')`);
}
