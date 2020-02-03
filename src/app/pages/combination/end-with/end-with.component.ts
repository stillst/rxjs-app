import { Component } from '@angular/core';

import { Observable, interval, of } from 'rxjs';
import { endWith } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-end-with',
  templateUrl: './end-with.component.pug',
})
export class EndWithComponent {
  source1$: Observable<number> = of(1, 2, 3, 4, 5, 6, 7, 8);
  source1: Stream = getStreamObj(this.source1$, `of(1, 2, 3, 4, 5, 6, 7, 8)`, 'Поток чисел');

  source2$: Observable<number> = interval(1000);
  source2: Stream = getStreamObj(this.source2$, `interval(1000)`, 'Интервал');

  result1: Stream = getStreamObj(
    this.source1$.pipe(endWith(1002)),
    `of(1, 2, 3, 4, 5, 6, 7, 8).pipe(endWith('1002'))`,
    ``,
  );

  result2: Stream = getStreamObj(
    this.source2$.pipe(endWith(1002)),
    `interval(1000).pipe(endWith(1002))`,
    ``,
  );

}
