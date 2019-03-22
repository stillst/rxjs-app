import { Component } from '@angular/core';
import { of, from } from 'rxjs';
import { sequenceEqual, switchMap, map, bufferCount, } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-sequnce-equal',
  templateUrl: './sequnce-equal.component.pug',
  styleUrls: ['./sequnce-equal.component.scss']
})
export class SequnceEqualComponent {
  source1$ = of(4, 5, 6);
  source2$ = of([1, 2, 3], [4, 5, 6], [7, 8, 9]);

  result1$ = this.source2$.pipe(
    switchMap(arr =>
      from(arr).pipe(sequenceEqual(this.source1$)))
  );

  source3$ = from([4, 5, 6]);
  result2$ = this.source1$.pipe(sequenceEqual(this.source3$));

  source1: Stream = getStreamObj(this.source1$, 'of(4, 5, 6)', '');
  source2: Stream = getStreamObj(this.source2$, 'of([1, 2, 3], [4, 5, 6], [7, 8, 9])', '');
  source3: Stream = getStreamObj(this.source3$, 'from([4, 5, 6])', '');

  result1: Stream = getStreamObj(this.result1$, `source2$.pipe(
    switchMap(arr =>
      from(arr).pipe(sequenceEqual(of(4, 5, 6))))
  )`, '');

  result2: Stream = getStreamObj(this.result2$, `of(4, 5, 6).pipe(sequenceEqual(from([4, 5, 6])))`, '');
}
