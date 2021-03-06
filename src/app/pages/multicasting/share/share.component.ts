import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { share } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.pug',
})
export class ShareComponent {
  constructor() {
  }

  source1$ = interval(1000).pipe(share());
  source1: Stream = getStreamObj(this.source1$, `interval(1000).pipe(share())`);

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
