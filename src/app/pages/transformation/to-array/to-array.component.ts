import { Component } from '@angular/core';

import { Observable, interval, of } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.pug',
})
export class ToArrayComponent {
  source1$: Observable<number> = of(1, 2, 3, 4);
  source1: Stream = getStreamObj(this.source1$, `of(1, 2, 3, 4)`);
  result1: Stream = getStreamObj(
    this.source1$.pipe(toArray()),
    `of(1, 2, 3, 4).pipe(toArray())`
  );

  source2$: Observable<number> = interval(1000);
  source2: Stream = getStreamObj(this.source2$, `interval(1000)`);
  result2: Stream = getStreamObj(
    this.source2$.pipe(toArray()),
    `interval(1000).pipe(toArray())`
  );

  source3$: Observable<number> = interval(1000).pipe(take(10));
  source3: Stream = getStreamObj(this.source3$, `interval(1000).pipe(take(10)`);
  result3: Stream = getStreamObj(
    this.source2$.pipe(
      take(10),
      toArray()
    ),
    `interval(1000).pipe(take(10), toArray())`
  );
}
