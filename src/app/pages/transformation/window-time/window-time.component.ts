import { Component } from '@angular/core';

import { fromEvent } from 'rxjs';
import { windowTime, mergeAll } from 'rxjs/operators';

import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-window-time',
  templateUrl: './window-time.component.pug',
})
export class WindowTimeComponent {
  source1$ = fromEvent(document, 'click');
  source1 = getStreamObj(this.source1$, `fromEvent(document, 'click')`);

  result1 = getStreamObj(
    this.source1$.pipe(windowTime(2000, 5000, 2), mergeAll()),
    `fromEvent(document, 'click').pipe(windowTime(2000, 5000, 2), mergeAll())`,
    'Every 5 seconds start a window 2 second long, and emit at most 2 click events per window'
  );
}
