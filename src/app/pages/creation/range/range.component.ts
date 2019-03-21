import { Component, OnInit } from '@angular/core';
import { Observable, range } from 'rxjs';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.pug',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

  range1$: Observable<number> = range(5, 20);
  range2$: Observable<number> = range(1, 10);

  streams: Stream[];
  active = true;

  toogle() {
    this.active = !this.active;
  }

  createStreams() {
    this.streams = [
      getStreamObj(this.range1$, 'range(5, 24)', 'Emit range 5-24'),
      getStreamObj(this.range2$, 'range(1, 10)', 'Emit range 1-10'),
    ];
  }

  ngOnInit() {
    this.createStreams();
  }
}
