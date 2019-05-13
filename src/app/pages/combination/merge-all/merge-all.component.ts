import { Component } from '@angular/core';
import { interval, fromEvent, of } from 'rxjs';
import { map, take, mergeAll } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-merge-all',
  templateUrl: './merge-all.component.pug',
})
export class MergeAllComponent {
  source1$ = fromEvent(document, 'click');
  source2$ = this.source1$.pipe(map(() => interval(1000).pipe(take(5))));
  result1$ = this.source2$.pipe(mergeAll());

  source1: Stream = getStreamObj(this.source1$, `fromEvent(document, 'click')`);
  source2: Stream = getStreamObj(this.source2$, `fromEvent(document, 'click').pipe(map(() => interval(1000).pipe(take(5))))`);

  result1: Stream = getStreamObj(this.result1$, `fromEvent(document, 'click').pipe(map(() => interval(1000).pipe(take(5))), mergeAll())`);
}
