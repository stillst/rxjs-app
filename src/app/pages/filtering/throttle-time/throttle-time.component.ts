import { Component } from '@angular/core';

import { Observable, interval, fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-throttle-time',
  templateUrl: './throttle-time.component.pug',
})
export class ThrottleTimeComponent {
  source1$: Observable<number> = interval(1000);
  source1: Stream = getStreamObj(this.source1$, `interval(1000)`);
  result1: Stream = getStreamObj(
    this.source1$.pipe(throttleTime(3000)),
    `interval(1000).pipe(throttleTime(3000))`
  );

  source2$ = fromEvent(document, 'click');
  source2: Stream = getStreamObj(this.source2$, `fromEvent(document, 'click')`);
  result2: Stream = getStreamObj(
    this.source2$.pipe(throttleTime(2000)),
    `fromEvent(document, 'click').pipe(throttleTime(2000))`
  );
}
