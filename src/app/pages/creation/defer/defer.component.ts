import { Component, OnInit } from '@angular/core';
import { defer, of } from 'rxjs';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.pug',
})
export class DeferComponent implements OnInit {
  streams: Stream[];

  ngOnInit() {
    this.createStreams();
  }

  createStreams(): void {
    this.streams = [
      getStreamObj(
        defer(() => of(new Date())),
        `defer(() => of(new Date()))`,
        `Поток из of(new Date())`
      ),
    ];
  }
}
