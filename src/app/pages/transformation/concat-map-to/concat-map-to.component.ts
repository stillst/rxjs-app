import { Component } from '@angular/core';

import { Observable, interval, fromEvent } from 'rxjs';
import { concatMapTo, take } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-concat-map-to',
  templateUrl: './concat-map-to.component.pug',
})
export class ConcatMapToComponent {
  source1$: Observable<number> = interval(5000);
  source1: Stream = getStreamObj(this.source1$, `interval(5000)`);
  source2$: Observable<number> = interval(1000).pipe(take(3));
  source2: Stream = getStreamObj(this.source2$, `interval(1000)`);
  result1: Stream = getStreamObj(
    this.source1$.pipe(concatMapTo(this.source2$)),
    `interval(5000).pipe(concatMapTo(interval(1000).pipe(take(3)).pipe(take(3))`
  );

  source3$: Observable<number> = interval(2000).pipe(take(3));
  source3: Stream = getStreamObj(this.source3$, `interval(2000).pipe(take(3)`);
  source4$: Observable<number> = interval(1000).pipe(take(6));
  source4:  Stream = getStreamObj(this.source4$, `interval(1000).pipe(take(6))`);
  result2: Stream = getStreamObj(
    this.source3$.pipe(concatMapTo(this.source4$)),
    `interval(2000).pipe(take(3)).pipe(concatMapTo(interval(1000).pipe(take6)))`
  );

  source5$ = fromEvent(document, 'click');
  source5: Stream = getStreamObj(this.source5$, `fromEvent(document, 'click')`);
  result3: Stream = getStreamObj(
    this.source5$.pipe(concatMapTo(this.source4$)),
    `fromEvent(document, 'click').pipe(concatMapTo(interval(1000).pipe(take6)))`
  );

  source6$ = fromEvent(document, 'click');
  source6: Stream = getStreamObj(this.source6$, `fromEvent(document, 'click')`);
  source7$: Observable<number> = interval(1000);
  source7: Stream = getStreamObj(this.source7$, `interval(1000)`);

  result4: Stream = getStreamObj(
    this.source6$.pipe(concatMapTo(this.source7$)),
    `fromEvent(document, 'click').pipe(concatMapTo(interval(1000)))`
  );
}
