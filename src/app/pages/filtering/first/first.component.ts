import { Component } from '@angular/core';

import { Observable, of, interval } from 'rxjs';
import { first } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.pug',
})
export class FirstComponent {
  source1$: Observable<number> = of(5, 1, 2, 2, 34, 1, 2, 3, 4, 44, 2, 1);
  source1: Stream = getStreamObj(this.source1$, 'of(5, 1, 2, 2, 34, 1, 2, 3, 4, 44, 2, 1)');
  result1: Stream = getStreamObj(
    this.source1$.pipe(first()),
    'of(5, 1, 2, 2, 34, 1, 2, 3, 4, 44, 2, 1).pipe(first())',
  );

  source2$: Observable<number> = interval(1000);
  source2: Stream = getStreamObj(this.source2$, 'interval(1000)');
  result2: Stream = getStreamObj(this.source2$.pipe(first()), 'interval(1000).pipe(first())');
}
