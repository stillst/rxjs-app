import { Component } from '@angular/core';
import { iif, of, interval, fromEvent } from 'rxjs';
import { mergeMap, throttleTime, filter, map } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-iif',
  templateUrl: './iif.component.pug',
})
export class IifComponent {

  source1$ = interval(1000);
  result1$ = this.source1$.pipe(
    mergeMap(v =>
      iif(
        () => v % 4 === 0,
        of('R'),
        of('X')
      ))
  );

  source1: Stream = getStreamObj(this.source1$, 'interval(1000)', '');
  result1: Stream = getStreamObj(this.result1$, `interval(1000).pipe(mergeMap(v =>
    iif(
      () => v % 4 === 0,
      of('R'),
      of('X')
    ))`, '');

  source2$ = fromEvent(document, 'mousemove');
  result2$ = this.source2$
    .pipe(
      throttleTime(50),
      filter((move: MouseEvent) => move.clientY < 210),
      map((move: MouseEvent) => move.clientY),
      mergeMap(yCoord =>
        iif(
          () => yCoord < 110,
          of(`I'm saying R!!`),
          of(`X's always win!!`)
      ))
    );

    source2: Stream = getStreamObj(this.source2$, 'fromEvent(document, "mousemove")', '');
    result2: Stream = getStreamObj(this.result2$, `source2$.pipe(
      throttleTime(50),
      filter((move: MouseEvent) => move.clientY < 210),
      map((move: MouseEvent) => move.clientY),
      mergeMap(yCoord =>
        iif(
          () => yCoord < 110,
          of('I'm saying R!!'),
          of('X's always win!!')
      ))
    )`, '');

}
