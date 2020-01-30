import { Component } from '@angular/core';

import { Observable, of } from 'rxjs';
import { expand, take } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.pug',
})
export class ExpandComponent {
  source1$: Observable<number> = of(2);

  getStreamObj = getStreamObj;

  result1: Stream = getStreamObj(
    this.source1$.pipe(
      expand(val => of(1 + val)),
      take(5)
    ),
    `interval(1000).pipe(expand(val => of(1 + val)), take(5))`
  );
}
