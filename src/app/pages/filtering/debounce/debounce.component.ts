import { Component } from '@angular/core';
import { Observable, of, timer, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.pug',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent {

  source1$: Observable<string> = of('WAIT', 'ONE', 'SECOND', 'Last will display');
  source1: Stream = getStreamObj(this.source1$, `of('WAIT', 'ONE', 'SECOND', 'Last will display')`);
  source2$: Observable<number> = interval(1000);
  source2: Stream = getStreamObj(this.source2$, `interval(1000)`);

  result1 = getStreamObj(
    this.source1$.pipe(debounce(() => timer(1000))),
    'interval(500).pipe(debounceTime(1000))',
    `In this example, all values but the last will be omitted
    output: 'Last will display`
  );

  result2 = getStreamObj(
    this.source2$.pipe(debounce((val: number) => timer(200 * val))),
    'interval(500).pipe(debounceTime(1000))',
    ` After 5 seconds, debounce time will be greater than interval time,
      all future values will be thrown away
      output: 0...1...2...3...4......(debounce time over 1s, no values emitted)
    `
  );
}
