import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { share, publishReplay } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';
import { ReplaySubject, ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-caching',
  templateUrl: './caching.component.pug',
})
export class CachingComponent implements OnInit {
  cachingObject;
  cachhingConnectable;

  constructor(private http$: HttpClient) {

  }

  source1$;
  source1: Stream = getStreamObj(this.source1$, ``);

  source2$ = this.http$.get<any>('https://yesno.wtf/api')
    .pipe(share());

  source2: Stream = getStreamObj(this.source2$, `this.http$.get('https://yesno.wtf/api')`);

  private getResource1() {
    if (!this.cachingObject) {
      this.cachingObject = new ReplaySubject<any>(1);

      this.http$.get<any>('https://yesno.wtf/api')
        .subscribe(result => {
          this.cachingObject.next(result);
        });
    }

    return this.cachingObject.asObservable();
  }

  private getResource2() {
    if (!this.cachhingConnectable) {
      this.cachhingConnectable = this.http$.get<any>('https://yesno.wtf/api')
        .pipe(
          publishReplay(1)
        );

      (this.cachhingConnectable as ConnectableObservable<any>).connect();
    }

    return this.cachhingConnectable;
  }

  ngOnInit(): void {
    this.source1$ = this.getResource1();

    this.getResource1();
    this.getResource1();

    this.getResource2();
    this.getResource2();
    this.getResource2();
  }
}
