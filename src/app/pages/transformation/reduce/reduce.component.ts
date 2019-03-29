import { Component } from '@angular/core';
import { Observable, interval, of, fromEvent } from 'rxjs';
import { reduce } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.pug',
})
export class ReduceComponent {
  source1$: Observable<number> = of(1, 2, 3, 4);
  source1: Stream = getStreamObj(this.source1$, `of(1, 2, 3, 4)`);

  result1: Stream = getStreamObj(
    this.source1$.pipe(reduce((acc, val) => acc + val)),
    `of(1, 2, 3, 4).pipe(fromEvent(document, 'click'))`
  );

  source2$: Observable<number> = interval(1000);
  source2: Stream = getStreamObj(this.source2$, `interval(1000)`);

  result2: Stream = getStreamObj(
    this.source2$.pipe(reduce((acc, val) => acc + val)),
    `interval(1000).pipe(fromEvent(document, 'click'))`
  );
}
