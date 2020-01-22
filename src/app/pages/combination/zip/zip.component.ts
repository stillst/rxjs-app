import { Component } from '@angular/core';
import { Observable, of, zip } from 'rxjs';
import { withLatestFrom, delay } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.pug',
})
export class ZipComponent {
  source1$: Observable<string> = of('Hello');
  source2$: Observable<string> = of('World!').pipe(delay(1000));
  source3$: Observable<string> = of('Goodbye').pipe(delay(3000));
  source4$: Observable<string> = of('Past').pipe(delay(4000));

  source1: Stream = getStreamObj(this.source1$, `of('Hello')`, '');
  source2: Stream = getStreamObj(this.source2$, `of('World!')`, '');
  source3: Stream = getStreamObj(this.source3$, `of('Goodbye')`, '');
  source4: Stream = getStreamObj(this.source4$, `of('Past')`, '');

  result1: Stream = getStreamObj(zip(
    this.source1$,
    this.source2$,
    this.source3$,
    this.source4$
    ),
    `zip(of('Hello'), of('World!'), of('Goodbye'), of('Past'))`,
    ``,
  );

  result2: Stream = getStreamObj(
    this.source2$.pipe(withLatestFrom(this.source1$)),
    `interval(5000).withLatestFrom(interval(1000))`,
    ``,
  );
}
