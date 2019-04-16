import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.pug',
})
export class IntervalComponent implements OnInit {
  streams: Stream[];

  ngOnInit() {
    this.createStreams();
  }

  createStreams(): void {
    this.streams = [
      getStreamObj(interval(1000), 'interval(1000)', 'Стреляет раз в секунду'),
      getStreamObj(interval(2000), 'interval(2000)', 'Стреляет раз в 2 секунды'),
      getStreamObj(interval(3000), 'interval(3000)', 'Стреляет раз в 3 секунды'),
      getStreamObj(interval(4000), 'interval(4000)', 'Стреляет раз в 4 секунды'),
      getStreamObj(interval(5000), 'interval(5000)', 'Стреляет раз в 5 секунды'),
    ];
  }
}
