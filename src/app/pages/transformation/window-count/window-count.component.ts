import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { windowCount, mergeAll } from 'rxjs/operators';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-window-count',
  templateUrl: './window-count.component.pug',
})
export class WindowCountComponent {
  source1$ = fromEvent(document, 'click');
  source1 = getStreamObj(this.source1$, `fromEvent(document, 'click')`);

  result1 = getStreamObj(
    this.source1$.pipe(windowCount(2, 3), mergeAll()),
    `fromEvent(document, 'click').pipe(windowCount(2, 3), mergeAll())`,
    'Ignore every 3rd click event, starting from the third one'
  );
}
