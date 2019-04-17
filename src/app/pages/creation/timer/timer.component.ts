import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.pug',
})
export class TimerComponent implements OnInit {
  streams: Stream[];

  ngOnInit() {
    this.createStreams();
  }

  createStreams(): void {
    this.streams = [
      getStreamObj(timer(2000), `timer(2000)`, `Таймер cтреляет через 2 секунды, затем завершается`),
      getStreamObj(timer(1000, 2000), `timer(1000, 2000)`, `Таймер cтреляет через секунду, затем раз в две секунды`),
      getStreamObj(timer(2000, 1000), `timer(2000, 1000)`, `Таймер cтреляет через 2 секунды, затем каждую секунду`),
    ];
  }
}
