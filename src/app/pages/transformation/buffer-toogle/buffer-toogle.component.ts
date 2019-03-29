import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { bufferToggle } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-buffer-toogle',
  templateUrl: './buffer-toogle.component.pug',
})
export class BufferToggleComponent {
  source1$: Observable<number> = interval(1000);
  source2$: Observable<number> = interval(5000);
  source1: Stream = getStreamObj(this.source1$, `interval(1000)`);
  source2: Stream = getStreamObj(this.source2$, `interval(5000)`);

  result1: Stream = getStreamObj(
    this.source1$.pipe(bufferToggle(
      this.source2$,
      val => {
        console.log(`Value ${val} emitted, starting buffer! Closing in 3s!`);
        return interval(3000);
      }
    )),
    `interval(1000).pipe(bufferToggle(3000))`
  );

}
