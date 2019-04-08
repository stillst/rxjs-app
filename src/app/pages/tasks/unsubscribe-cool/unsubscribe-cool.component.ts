import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-unsubscribe-cool',
  templateUrl: './unsubscribe-cool.component.pug',
})
export class UnsubscribeCoolComponent implements OnInit, OnDestroy {
  /**
   * Специальный сабджект для отписки
   */
  destroyStream = new Subject<void>();

  source1$: Observable<string> = interval(1000).pipe(
    map(() => Math.random().toString().substr(2, 3)),
    takeUntil(this.destroyStream)
  );
  source1: Stream = getStreamObj(this.source1$, `interval(1000).pipe(
    map(() => Math.random().toString().substr(2, 3))
  )`);

  ngOnDestroy(): void {
    this.destroyStream.next();
  }

  ngOnInit(): void {

  }
}
