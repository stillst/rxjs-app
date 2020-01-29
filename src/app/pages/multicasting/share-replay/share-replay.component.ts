import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.pug',
})
export class ShareReplayComponent {
  constructor() {
  }

  source1$ = interval(1000).pipe(shareReplay());
  source1: Stream = getStreamObj(this.source1$, `interval(1000).pipe(shareReplay())`);

  result1: Stream = getStreamObj(
    this.source1$,
    `Подписываемся сразу`,
    ``,
    false,
  );

  result2: Stream = getStreamObj(
    this.source1$,
    `Подписываемся через 4 секунды`,
    ``,
    false,
    4000,
  );
}
