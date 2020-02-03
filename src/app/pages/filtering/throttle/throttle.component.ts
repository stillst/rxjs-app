import { Component } from '@angular/core';

import { Observable, interval, fromEvent } from 'rxjs';
import { throttle } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-throttle',
  templateUrl: './throttle.component.pug',
})
export class ThrottleComponent {
  source1$: Observable<number> = interval(1000);
  source1: Stream = getStreamObj(this.source1$, `interval(1000)`);
  result1: Stream = getStreamObj(
    this.source1$.pipe(throttle(() => interval(3000))),
    `interval(1000).pipe(throttle(() => interval(3000)))`,
  );
  result2: Stream = getStreamObj(
    this.source1$.pipe(throttle((val) => interval(val * 200))),
    `interval(1000).pipe(throttle((val) => interval(val * 200)))`
  );

  source2$ = fromEvent(document, 'click');
  source2: Stream = getStreamObj(this.source2$, `fromEvent(document, 'click')`);
  result3: Stream = getStreamObj(
    this.source2$.pipe(throttle(() => interval(2000))),
    `fromEvent(document, 'click').pipe(throttle(() => interval(2000)))`,
  );
}
