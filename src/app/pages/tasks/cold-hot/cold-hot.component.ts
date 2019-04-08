import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subject, ConnectableObservable } from 'rxjs';
import { map, multicast, publish, refCount, share } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-cold-hot',
  templateUrl: './cold-hot.component.pug',
})
export class ColdHotComponent implements OnInit {
  source1$: Observable<string> = interval(1000).pipe(
    map(() => Math.random().toString().substr(2, 3)),
  );
  source1: Stream = getStreamObj(this.source1$, `interval(1000).pipe(
    map(() => Math.random().toString().substr(2, 3))
  )`);

  subject = new Subject();

  source2$ = this.source1$.subscribe(this.subject);

  source2: Stream = getStreamObj(this.subject, `interval(1000).pipe(
    map(() => Math.random().toString().substr(2, 3)).subscribe(new Subject())
  )`);

  source3$ = interval(1000).pipe(
    map(() => Math.random().toString().substr(2, 3)),
    multicast(() => new Subject()),
  );

  source3: Stream = getStreamObj(this.source3$, `interval(1000).pipe(
    map(() => Math.random().toString().substr(2, 3)).pipe(multicast(new Subject()))
  )`);

  source4$ = interval(1000).pipe(
    map(() => Math.random().toString().substr(2, 3)),
    publish(),
  );

  source4: Stream = getStreamObj(this.source4$, `interval(1000).pipe(
    map(() => Math.random().toString().substr(2, 3)).publish()
  )`);

  source5$ = interval(1000).pipe(
    map(() => Math.random().toString().substr(2, 3)),
    publish(),
    refCount() // подсчет активных подписок, если их не осталось поток завершается
  );

  source5: Stream = getStreamObj(this.source5$, `interval(1000).pipe(
    map(() => Math.random().toString().substr(2, 3)),
    publish(),
    refCount(),
  )`);

  source6$ = interval(1000).pipe(
    map(() => Math.random().toString().substr(2, 3)),
    // publish(),
    // refCount()
    share() // тоже самое что и publish + refCount
  );

  source6: Stream = getStreamObj(this.source6$, `interval(1000).pipe(
    map(() => Math.random().toString().substr(2, 3)),
    share(),
  )`);

  ngOnInit(): void {
    (this.source3$ as ConnectableObservable<string>).connect();
    (this.source4$ as ConnectableObservable<string>).connect();
  }

}
