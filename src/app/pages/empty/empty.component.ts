import { Component, OnInit } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { Stream } from '../app.interface';
import { getStreamObj } from '../utils';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.pug',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit {

  empty1$: Observable<any> = empty();
  streams: Stream[];
  active = true;

  toogle() {
    this.active = !this.active;
  }

  createStreams() {
    this.streams = [
      getStreamObj(this.empty1$, 'empty()', 'Empty immediately completes'),
    ];
  }

  ngOnInit() {
    this.createStreams();
  }
}
