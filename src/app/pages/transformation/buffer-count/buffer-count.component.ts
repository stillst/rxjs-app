import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { bufferCount } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-buffer-count',
  templateUrl: './buffer-count.component.pug',
})
export class BufferCountComponent {
  source1$: Observable<number> = interval(1000);
  source1: Stream = getStreamObj(this.source1$, `interval(1000)`);

  result1: Stream = getStreamObj(
    this.source1$.pipe(bufferCount(5)),
    `interval(1000).pipe(bufferCount(5))`
  );

  result2: Stream = getStreamObj(
    this.source1$.pipe(bufferCount(5, 3)),
    `interval(1000).pipe(bufferCount(5, 3))`
  );
}
