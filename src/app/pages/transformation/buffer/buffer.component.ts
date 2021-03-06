import { Component } from '@angular/core';

import { Observable, interval, fromEvent } from 'rxjs';
import { buffer } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.pug',
})
export class BufferComponent {
  source1$: Observable<number> = interval(1000);
  source2$ = fromEvent(document, 'click');

  getStreamObj = getStreamObj;

  result1: Stream = getStreamObj(
    this.source1$.pipe(buffer(this.source2$)),
    `interval(1000).pipe(fromEvent(document, 'click'))`
  );
}
