import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinct } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.pug',
  styleUrls: ['./distinct.component.scss']
})
export class DistinctComponent {
  source1$: Observable<number> = of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1);
  source1: Stream = getStreamObj(this.source1$, `of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)`);
  result1: Stream = getStreamObj(this.source1$.pipe(distinct()), `interval(500).pipe(debounceTime(1000))`);

  source2$: Observable<{age: number, name: string}> = of({ age: 4, name: 'Foo'}, { age: 7, name: 'Bar'}, { age: 5, name: 'Foo'});
  source2: Stream = getStreamObj(this.source2$, `of({ age: 4, name: 'Foo'}, { age: 7, name: 'Bar'}, { age: 5, name: 'Foo'})`);
  result2: Stream = getStreamObj(
    this.source2$.pipe(distinct(x => x.name)),
      `of({ age: 4, name: 'Foo'}, { age: 7, name: 'Bar'}, { age: 5, name: 'Foo'}).pipe(distinct(x => x.name))`
    );
}
