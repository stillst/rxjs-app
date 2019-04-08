import { Component, OnInit } from '@angular/core';
import { interval, Subject, ReplaySubject, ConnectableObservable } from 'rxjs';
import { multicast } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-multicasting',
  templateUrl: './multicasting.component.pug',
})
export class MulticastingComponent implements OnInit {
  subject = new Subject();
  replaySubject = new ReplaySubject();

  source1$ = interval(1000).pipe(
    multicast(() => this.subject),
  );

  source1: Stream = getStreamObj(this.source1$, ``, '', false, 4000);

  source2$ = interval(1000).pipe(
    multicast(() => this.replaySubject),
  );

  source2: Stream = getStreamObj(this.source2$, ``, '', false, 4000);

  ngOnInit(): void {
    (this.source1$ as ConnectableObservable<string>).connect();
    (this.source2$ as ConnectableObservable<string>).connect();
  }
}
