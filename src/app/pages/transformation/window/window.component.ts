import { Component } from '@angular/core';

import { Observable, interval, timer, fromEvent } from 'rxjs';
import {
  window, mergeAll, map, take,
  // tap,
} from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.pug',
})
export class WindowComponent {
  source1$: Observable<string> = timer(3000, 1000).pipe(map(x => x + 'a'));
  source1: Stream = getStreamObj(this.source1$, `timer(0, 1000)`);
  source2$: Observable<number> = interval(3000);
  source2: Stream = getStreamObj(this.source2$, `interval(3000)`);
  result1 = getStreamObj(
    this.source1$.pipe(
      window(this.source2$),
      // tap(x => console.warn('x', x)),
      mergeAll()
    ),
    'timer(0, 1000).pipe(window(interval(3000)))',
  );

  source3$ = fromEvent(document, 'click');
  source3 = getStreamObj(this.source3$, `fromEvent(document, 'click')`);
  result2$ = this.source3$.pipe(
    window(this.source1$),
    map(win => win.pipe(take(2))),
    mergeAll(),
  );
  result2: Stream = getStreamObj(this.result2$, `fromEvent(document, 'click').pipe(
    window(timer(0, 1000)),
    map(win => win.pipe(take(2))),
    mergeAll(),
  )`);
}
