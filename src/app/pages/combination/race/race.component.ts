import { Component } from '@angular/core';
import { Observable, race, interval } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.pug',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent {
  source1$: Observable<string> = interval(2000).pipe(mapTo('1'));
  source2$: Observable<string> = interval(3000).pipe(mapTo('2'));
  source3$: Observable<string> = interval(1000).pipe(mapTo('3'));

  source1: Stream = getStreamObj(this.source1$, `interval(2000).pipe(mapTo('1'))`, '');
  source2: Stream = getStreamObj(this.source2$, `interval(3000).pipe(mapTo('2'))`, '');
  source3: Stream = getStreamObj(this.source3$, `interval(1000).pipe(mapTo('3'))`, '');

  result1$ = race(this.source1$, this.source2$, this.source3$);

  result1: Stream = getStreamObj(this.result1$,
  `race(
    interval(2000).pipe(mapTo('1')),
    interval(3000).pipe(mapTo('2'))),
    interval(1000).pipe(mapTo('3')),
    `,
  `concat as static method`);
}
