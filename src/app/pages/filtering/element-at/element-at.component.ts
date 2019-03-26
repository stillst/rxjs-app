import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { elementAt } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-element-at',
  templateUrl: './element-at.component.pug',
})
export class ElementAtComponent {
  source1$: Observable<number> = of(1, 1, 2, 2, 34, 1, 2, 3, 4, 3, 2, 1);
  source1: Stream = getStreamObj(this.source1$, `of(1, 1, 2, 2, 34, 1, 2, 3, 4, 3, 2, 1)`);
  result1: Stream = getStreamObj(this.source1$.pipe(elementAt(4)), `interval(500).pipe(elementAt(4))`);
}
