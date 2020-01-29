import { Component, OnInit } from '@angular/core';

import { of, NEVER } from 'rxjs';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-never',
  templateUrl: './NEVER.component.pug',
})
export class NEVERComponent implements OnInit {
  streams: Stream[];

  ngOnInit() {
    this.createStreams();
  }

  createStreams(): void {
    this.streams = [
      getStreamObj(
        NEVER.pipe(startWith(7)),
        `NEVER.pipe(startWith(7))`,
        `Поток, который никогда не завершается`,
      ),
    ];
  }
}
