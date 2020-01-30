import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { windowCount, mergeAll } from 'rxjs/operators';

import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-window-count',
  templateUrl: './window-count.component.pug',
})
export class WindowCountComponent {
  source1$ = interval(1000);
  source1 = getStreamObj(this.source1$, 'interval(1000)');
  result1 = getStreamObj(
    this.source1$.pipe(windowCount(2, 3), mergeAll()),
    `interval(1000).pipe(windowCount(2, 3), mergeAll())`,
    'Ignore every 3rd event'
  );
  result2 = getStreamObj(
    this.source1$.pipe(windowCount(4), mergeAll()),
    `interval(1000).pipe(windowCount(4), mergeAll())`,
  );
}
