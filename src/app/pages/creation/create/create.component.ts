import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Stream,  } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.pug',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  create1$: Observable<number> = Observable.create((observer: Subject<string>) => {
    observer.next('Hello');
    observer.next('World');
    observer.complete();
  });
  create2$: Observable<number> = Observable.create((observer: Subject<string>) => {
    observer.next('Bye');
    observer.next('World');
    observer.error('Error');
  });
  create3$: Observable<number> = Observable.create((observer: Subject<number>) => {
    let value = 0;
    const interval = setInterval(() => {
      if (value % 2 === 0) {
        observer.next(value);
      }
      value++;
  }, 1000);

  return () => clearInterval(interval);
  });

  streams: Stream[];
  active = true;

  toogle() {
    this.active = !this.active;
  }

  createStreams() {
    this.streams = [
      getStreamObj(this.create1$, `(observer: Subject<string>) => {
        observer.next('Hello');
        observer.next('World');
        observer.complete();
      }`, 'Observable that emits multiple values, then throw an completes'),
      getStreamObj(this.create2$, `Observable.create((observer: Subject<string>) => {
        observer.next('Bye');
        observer.next('World');
        observer.error('Error');
      }`, 'Observable that emits multiple values, then throw an error'),
      getStreamObj(this.create3$, `Observable.create((observer: Subject<number>) => {
        let value = 0;
        const interval = setInterval(() => {
          if (value % 2 === 0) {
            observer.next(value);
          }
          value++;
        }, 1000);
        return () => clearInterval(interval);
      }`, 'Observable that emits even numbers on timer'),
    ];
  }

  ngOnInit() {
    this.createStreams();
  }
}
