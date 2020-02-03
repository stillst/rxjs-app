import { Component } from '@angular/core';

import { Observable, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.pug',
})
export class SampleComponent {
  source1$: Observable<number> = interval(1000);
  source2$: Observable<number> = interval(2000);
  source1: Stream = getStreamObj(this.source1$, `interval(1000)`);
  source2: Stream = getStreamObj(this.source2$, `interval(2000)`);
  result1: Stream = getStreamObj(
    this.source1$.pipe(sample(this.source2$)),
    `interval(1000).pipe(sample(interval(2000)))`
  );
  result2: Stream = getStreamObj(
    this.source2$.pipe(sample(this.source1$)),
    `interval(2000).pipe(sample(interval(1000))),
  `);
}
