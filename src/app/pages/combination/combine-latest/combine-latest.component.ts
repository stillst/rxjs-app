import { Component } from '@angular/core';
import { Observable, timer, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.pug',
})
export class CombineLatestComponent {
  source1$: Observable<number> = timer(1000, 10000);
  source2$: Observable<number> = timer(2000, 1000);
  source3$: Observable<number> = timer(2000, 2000);

  source1: Stream = getStreamObj(
    this.source1$,
    'timer(1000, 10000)',
    'Стреляет первый раз через секунду, затем каждые 10 секунд'
  );
  source2: Stream = getStreamObj(
    this.source2$,
    'timer(2000, 1000)',
    'Стреляет первый раз через 2 секунды, затем каждую секунду'
  );
  source3: Stream = getStreamObj(
    this.source3$,
    'timer(2000, 2000)',
    'Стреляет первый раз через 2 секунды, затем через каждые две секунды'
  );

  result1 = getStreamObj(
    combineLatest(this.source1$, this.source2$, this.source3$),
    'combineLatest(timer(1000, 10000), timer(2000, 1000), timer(2000, 2000))',
    'Комбинирует три потока'
  );

  result2 = getStreamObj(
    combineLatest(
      this.source1$,
      this.source2$,
      this.source3$,
      (one: number, two: number , tree: number) => (one + two + tree) / 2,
    ),
    `combineLatest(
        timer(1000, 10000),
        timer(2000, 1000),
        timer(2000, 2000),
        (one: number, two: number , tree: number) => (one + two + tree) / 2;
    )`,
    'Комбинирует три потока, суммирует значение и стреляет'
  );
}
