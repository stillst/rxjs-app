import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable, interval, fromEvent, of } from 'rxjs';
import { debounceTime, pluck } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.pug',
})
export class DebounceTimeComponent implements OnInit {
  @ViewChild('input') input;
  source1$: Observable<number> = interval(500);
  source2$: Observable<number> = interval(1000);
  source3$;
  source4$: Observable<string> = of('WAIT', 'ONE', 'SECOND', 'Last will display');
  result3;

  source1: Stream = getStreamObj(this.source1$, 'interval(500)', '');
  source2: Stream = getStreamObj(this.source2$, `interval(2000)`, '');
  source3;
  source4: Stream = getStreamObj(this.source4$, `of('WAIT', 'ONE', 'SECOND', 'Last will display')`, '');

  result1 = getStreamObj(
    this.source1$.pipe(debounceTime(1000)),
    'interval(500).pipe(debounceTime(1000))',
    ''
  );

  result2 = getStreamObj(this.source2$.pipe(debounceTime(500)),
    'interval(1000).pipe(debounceTime(500))',
    ''
  );

  result4 = getStreamObj(this.source4$.pipe(debounceTime(500)),
    `of('WAIT', 'ONE', 'SECOND', 'Last will display').pipe(debounceTime(500))`,
    ''
  );

  ngOnInit() {
    this.source3$ = fromEvent(this.input.nativeElement, 'keyup').pipe(pluck('currentTarget', 'value'));
    this.source3 = getStreamObj(this.source3$, `fromEvent(this.input.nativeElement, 'keyup').pipe(pluck('currentTarget', 'value'))`, '');
    this.result3 = getStreamObj(this.source3$.pipe(debounceTime(2000)),
      `fromEvent(this.input.nativeElement, 'keyup').pipe(pluck('currentTarget', 'value')).pipe(debounceTime(2000))`,
      ''
    );
  }
}
