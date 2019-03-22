import { Component } from '@angular/core';
import { map, combineAll } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-combine-all',
  templateUrl: './combine-all.component.pug',
  styleUrls: ['./combine-all.component.scss']
})
export class CombineAllComponent {
  source1$: Observable<number> = of(1, 2, 3, 4, 5, 6, 7, 8);
  nextSource1$: Observable<Observable<string>> = this.source1$.pipe(map(x => of('a-' + x, 'b-' + x, 'c-' + x, 'd-' + x)));
  result1$ = this.nextSource1$.pipe(combineAll());

  source1: Stream = getStreamObj(this.source1$, `of(1, 2, 3, 4, 5, 6, 7, 8)`, '');
  nextSource1: Stream = getStreamObj(
    this.nextSource1$,
    `of(1, 2, 3, 4, 5, 6, 7, 8).pipe(map(x => of('a-' + x, 'b-' + x, 'c-' + x, 'd-' + x)))`,
    ''
  );
  result1: Stream = getStreamObj(
    this.result1$,
    `of(1, 2, 3, 4, 5, 6, 7, 8).pipe(map(x => of('a-' + x, 'b-' + x, 'c-' + x, 'd-' + x))).pipe(combineAll())`,
    ''
  );


  source2$: Observable<number> = of(1, 2, 3, 4, 5, 6, 7, 8);
  nextSource2$: Observable<Observable<string>> = this.source1$.pipe(map(x => of('a', 'b', 'c', 'd')));
  result2$ = this.nextSource2$.pipe(combineAll());

  source2: Stream = getStreamObj(this.source2$, `of(1, 2, 3, 4, 5, 6, 7, 8)`, '');
  nextSource2: Stream = getStreamObj(
    this.nextSource2$,
    `of(1, 2, 3, 4, 5, 6, 7, 8).pipe(map(x => of('a', 'b', 'c', 'd')))`,
    ''
  );
  result2: Stream = getStreamObj(
    this.result2$,
    `of(1, 2, 3, 4, 5, 6, 7, 8).pipe(map(x => of('a', 'b', 'c' 'd'))).pipe(combineAll())`,
    ''
  );
}
