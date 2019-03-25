import { Component } from '@angular/core';
import { Observable, merge, interval } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.pug',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent {
  source1$: Observable<string> = interval(2000).pipe(mapTo('1'));
  source2$: Observable<string> = interval(3000).pipe(mapTo('2'));
  source3$: Observable<string> = interval(1000).pipe(mapTo('3'));

  source1: Stream = getStreamObj(this.source1$, `interval(2000).pipe(mapTo('1'))`, '');
  source2: Stream = getStreamObj(this.source2$, `interval(3000).pipe(mapTo('2'))`, '');
  source3: Stream = getStreamObj(this.source3$, `interval(1000).pipe(mapTo('3'))`, '');

  result1$ = merge(this.source1$, this.source2$, this.source3$);

  result1: Stream = getStreamObj(this.result1$,
  `merge(
    interval(2000).pipe(mapTo('1')),
    interval(3000).pipe(mapTo('2'))),
    interval(1000).pipe(mapTo('3')),
    `,
  `concat as static method`);
}
