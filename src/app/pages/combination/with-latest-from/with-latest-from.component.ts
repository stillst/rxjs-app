import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.pug',
})
export class WithLatestFromComponent {
  source1$: Observable<number> = interval(1000);
  source2$: Observable<number> = interval(5000);

  source1: Stream = getStreamObj(this.source1$, `interval(1000)`, '');
  source2: Stream = getStreamObj(this.source2$, `interval(5000)`, '');

  result1: Stream = getStreamObj(
    this.source1$.pipe(withLatestFrom(this.source2$)),
    `interval(1000).withLatestFrom(interval(5000))`,
    ``,
  );

  result2: Stream = getStreamObj(
    this.source2$.pipe(withLatestFrom(this.source1$)),
    `interval(5000).withLatestFrom(interval(1000))`,
    ``,
  );
}
