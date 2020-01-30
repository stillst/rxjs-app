import { Component } from '@angular/core';

import { Observable, interval } from 'rxjs';
import { bufferWhen } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-buffer-when',
  templateUrl: './buffer-when.component.pug',
})
export class BufferWhenComponent {
  source1$: Observable<number> = interval(1000);

  getStreamObj = getStreamObj;

  result1: Stream = getStreamObj(
    this.source1$.pipe(bufferWhen(
      () => interval(3000)
    )),
    `interval(1000).pipe(bufferWhen(() => interval(3000)))`);
}
