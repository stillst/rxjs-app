import { Component, OnInit } from '@angular/core';
import { Observable, defer, of } from 'rxjs';
import { Stream,  } from '../app.interface';
import { getStreamObj } from '../utils';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.pug',
  styleUrls: ['./defer.component.scss']
})
export class DeferComponent implements OnInit {

  defer1$: Observable<Date> = defer(() => of(new Date()));
  streams: Stream[];
  active = true;

  toogle() {
    this.active = !this.active;
  }

  createStreams() {
    this.streams = [
      getStreamObj(this.defer1$, 'timer(2000)', 'Defer to get current date/time at the time of subscription'),
    ];
  }

  ngOnInit() {
    this.createStreams();
  }
}
