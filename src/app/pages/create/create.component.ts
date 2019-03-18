import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Stream,  } from '../app.interface';
import { getStreamObj } from '../utils';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.pug',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  timer1$: Observable<number> = timer(2000);
  timer2$: Observable<number> = timer(1000, 2000);
  timer3$: Observable<number> = timer(2000, 1000);

  streams: Stream[];
  active = true;

  toogle() {
    this.active = !this.active;
  }

  createStreams() {
    this.streams = [
      getStreamObj(this.timer1$, 'timer(2000)', 'Таймер cтреляет через 2 секунды, затем завершается'),
      getStreamObj(this.timer2$, 'timer(1000, 2000)', 'Таймер cтреляет через секунду, затем раз в две секунды'),
      getStreamObj(this.timer3$, 'timer(2000, 1000)', 'Таймер cтреляет через 2 секунды, затем каждую секунду'),
    ];
  }

  ngOnInit() {
    this.createStreams();
  }
}
