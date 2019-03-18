import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { Stream,  } from '../app.interface';
import { getStreamObj } from '../utils';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.pug',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  interval1$: Observable<number> = interval(1000);
  interval2$: Observable<number> = interval(2000);
  interval3$: Observable<number> = interval(3000);

  streams: Stream[];
  active = true;

  toogle() {
    this.active = !this.active;
  }

  createStreams() {
    this.streams = [
      getStreamObj(this.interval1$, 'interval(1000)', 'Интервал cтреляет раз в секунду'),
      getStreamObj(this.interval2$, 'interval(2000)', 'Интервал cтреляет раз в 2 секунды'),
      getStreamObj(this.interval3$, 'interval(3000)', 'Интервал cтреляет раз в 3 секунды'),
    ];
  }

  ngOnInit() {
    this.createStreams();
  }
}
