import { Component } from '@angular/core';
import { Observable, timer, combineLatest } from 'rxjs';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.pug',
})
export class CombineLatestComponent {
  source1$: Observable<number> = timer(1000, 10000);
  source2$: Observable<number> = timer(2000, 1000);
  source3$: Observable<number> = timer(2000, 2000);

  source1: Stream = getStreamObj(this.source1$, 'timer(1000, 10000)', 'emits first value at 1s, then once every 10s');
  source2: Stream = getStreamObj(this.source2$, 'timer(2000, 1000)', 'emits first value at 2s, then once every 1s');
  source3: Stream = getStreamObj(this.source3$, 'timer(2000, 2000)', 'emits first value at 2s, then once every 2s');

  result1 = getStreamObj(combineLatest(this.source1$, this.source2$, this.source3$),
    'combineLatest(timer(1000, 10000), timer(2000, 1000), timer(2000, 2000))',
    'Combining observables emitting at 3 intervals');

  result2 = getStreamObj(combineLatest(this.source1$, this.source2$, this.source3$, (one: number, two: number , tree: number) => {
    return one + two + tree;
  }),
  `combineLatest(timer(1000, 10000), timer(2000, 1000), timer(2000, 2000), (one: number, two: number , tree: number) => {
    return one + two + tree;
  })`,
  'Combining observables emitting at 3 intervals and sum last values');

}
