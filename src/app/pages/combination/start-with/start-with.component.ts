import { Component } from '@angular/core';
import { Observable, interval, of } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.pug',
  styleUrls: ['./start-with.component.scss']
})
export class StartWithComponent {
  source1$: Observable<number> = of(1, 2, 3, 4, 5, 6, 7, 8);
  source2$: Observable<number> = interval(1000);

  source1: Stream = getStreamObj(this.source1$, `of(1, 2, 3, 4, 5, 6, 7, 8)`, '');
  source2: Stream = getStreamObj(this.source2$, `interval(1000)`, '');

  result1: Stream = getStreamObj(
    this.source1$.pipe(startWith('Hello!')),
    `of(1, 2, 3, 4, 5, 6, 7, 8).pipe(startWith('Hello!'))`,
    ``,
  );

  result2: Stream = getStreamObj(
    this.source2$.pipe(startWith('Hello!')),
    `of(1, 2, 3, 4, 5, 6, 7, 8).pipe(startWith('Hello!'))`,
    ``,
  );
}
