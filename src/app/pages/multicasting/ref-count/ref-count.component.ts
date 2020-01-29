import { Component } from '@angular/core';

import { interval } from 'rxjs';
import { publish, refCount } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-ref-count',
  templateUrl: './ref-count.component.pug',
})
export class RefCountComponent {
  constructor() {
  }

  source1$ = interval(1000).pipe(publish(), refCount());
  source1: Stream = getStreamObj(this.source1$, `interval(1000).pipe(publish(), refCount())`);

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
