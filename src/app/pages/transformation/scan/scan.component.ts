import { Component } from '@angular/core';
import { Observable, interval, of } from 'rxjs';
import { scan } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.pug',
})
export class ScanComponent {
  source1$: Observable<number> = of(1, 2, 3, 4);
  source1: Stream = getStreamObj(this.source1$, `of(1, 2, 3, 4)`);

  result1: Stream = getStreamObj(
    this.source1$.pipe(scan((acc, val) => acc + val)),
    `of(1, 2, 3, 4).pipe(scan((acc, val) => acc + val))`
  );

  source2$: Observable<number> = interval(1000);
  source2: Stream = getStreamObj(this.source2$, `interval(1000)`);

  result2: Stream = getStreamObj(
    this.source2$.pipe(scan((acc, val) => acc + val)),
    `interval(1000).pipe(scan((acc, val) => acc + val))`
  );

  result3: Stream = getStreamObj(
    this.source2$.pipe(scan((acc, val) => [...acc, val ], []) as any),
    `interval(1000).pipe(scan((acc, val) => [...acc, val ], []))`
  );


  source3$ = of({ name: 'Joe' }, { age: 30 }, { favoriteLanguage: 'JavaScript' });
  source3: Stream = getStreamObj(this.source3$, `{ name: 'Joe' }, { age: 30 }, { favoriteLanguage: 'JavaScript' }`);


  result4: Stream = getStreamObj(
    this.source3$.pipe(
      scan((acc, curr) => Object.assign({}, acc, curr), {})
    ),
    `of({ name: 'Joe' }, { age: 30 }, { favoriteLanguage: 'JavaScript' }).pipe(
      scan((acc, curr) => Object.assign({}, acc, curr), {})
    )`
  );
}
