import { Component, ViewChild, OnInit } from '@angular/core';
import { Observable, interval, fromEvent } from 'rxjs';
import { debounceTime, pluck } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.pug',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit {
  @ViewChild('input') input;
  source1$: Observable<number> = interval(500);
  source2$: Observable<number> = interval(1000);
  source3$;
  result3;

  source1: Stream = getStreamObj(this.source1$, 'interval(500)', '');
  source2: Stream = getStreamObj(this.source2$, `interval(2000)`, '');
  source3;

  result1 = getStreamObj(
    this.source1$.pipe(debounceTime(1000)),
    'interval(500).pipe(debounceTime(1000))',
    'concat as static method'
  );

  result2 = getStreamObj(this.source2$.pipe(debounceTime(500)),
    'interval(1000).pipe(debounceTime(500))',
    'concat as static method'
  );

  ngOnInit() {
    this.source3$ = fromEvent(this.input.nativeElement, 'keyup').pipe(pluck('currentTarget', 'value'));
    this.source3 = getStreamObj(this.source3$, `fromEvent(this.input.nativeElement, 'keyup').pipe(pluck('currentTarget', 'value'))`, '');
    this.result3 = getStreamObj(this.source3$.pipe(debounceTime(500)),
      `fromEvent(this.input.nativeElement, 'keyup').pipe(pluck('currentTarget', 'value')).pipe(debounceTime(500))`,
      'concat as static method'
    );
  }
}
