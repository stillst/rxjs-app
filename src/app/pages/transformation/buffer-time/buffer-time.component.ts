import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.pug',
})
export class BufferTimeComponent {
  source1$: Observable<number> = interval(1000);
  source1: Stream = getStreamObj(this.source1$, `interval(1000)`);

  result1: Stream = getStreamObj(
    this.source1$.pipe(bufferTime(3000)),
    `interval(1000).pipe(bufferTime(3000))`
  );

  result2: Stream = getStreamObj(
    this.source1$.pipe(bufferTime(10000)),
    `interval(1000).pipe(bufferTime(10000))`
  );
}
