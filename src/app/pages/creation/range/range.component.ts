import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.pug',
})
export class RangeComponent implements OnInit {
  streams: Stream[];

  ngOnInit() {
    this.createStreams();
  }

  createStreams(): void {
    this.streams = [
      getStreamObj(range(5, 20), `range(5, 20)`, `Поток из последовательности 5-24`),
      getStreamObj(range(1, 10), `range(1, 10)`, `Поток из последовательности 1-10`),
    ];
  }
}
