import { Component, OnInit } from '@angular/core';

import { ConnectableObservable, interval } from 'rxjs';
import { publishReplay } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-publish-replay',
  templateUrl: './publish-replay.component.pug',
})
export class PublishReplayComponent implements OnInit {
  constructor() {
  }

  source1$ = interval(1000).pipe(publishReplay());
  source1: Stream = getStreamObj(this.source1$, `interval(1000).pipe(publishReplay())`);

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

  ngOnInit(): void {
    (this.source1$ as ConnectableObservable<any>).connect();
  }
}
