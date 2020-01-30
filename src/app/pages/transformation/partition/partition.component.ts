import { Component } from '@angular/core';

import { Observable, from } from 'rxjs';
import { partition } from 'rxjs/operators';

import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-partition',
  templateUrl: './partition.component.pug',
})
export class PartitionComponent {
  source1$: Observable<number> = from([1, 2, 3, 4, 5]);
  source1: Stream = getStreamObj(this.source1$, `from([1, 2, 3, 4, 5])`);

  results1$ = from([1, 2, 3, 4, 5, 6]).pipe(partition((val: number) => val % 2 === 0) as any);
  result1 = getStreamObj(
    this.results1$[0],
    `from([1, 2, 3, 4, 5]).pipe(partition((val: number) => val % 2 === 0)[0])`
  );

  result2 = getStreamObj(
    this.results1$[1],
    `from([1, 2, 3, 4, 5]).pipe(partition((val: number) => val % 2 === 0)[1])`
  );
}
