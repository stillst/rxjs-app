import { Component } from '@angular/core';
import { Observable, concat, of, interval } from 'rxjs';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.pug',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent {
  source1$: Observable<number> = of(1, 2, 3, 4, 5, 6, 7, 8);
  source2$: Observable<string> = of('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');
  source3$: Observable<number> = interval(1000);

  source1: Stream = getStreamObj(this.source1$, 'of(1, 2, 3, 4, 5, 6, 7, 8)', '');
  source2: Stream = getStreamObj(this.source2$, `of('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h')`, '');
  source3: Stream = getStreamObj(this.source3$, `interval(1000)`, '');

  result1 = getStreamObj(concat(this.source1$, this.source2$),
    'concat( this.source1$, this.source2$)',
    'concat as static method');

  result2 = getStreamObj(concat(this.source1$, this.source3$),
  'concat(this.source1$, this.source3$)',
  'concat as static method');

  result3 = getStreamObj(concat(this.source3$, this.source1$),
  'concat(this.source1$, this.source3$)',
  'concat as static method');
}
