import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.pug',
})
export class CreateComponent implements OnInit {
  streams: Stream[];

  ngOnInit() {
    this.createStreams();
  }

  createStreams(): void {
    const source1$: Observable<number> = Observable.create((observer: Subject<number>) => {
      let value = 0;
      const interval = setInterval(() => {
        if (value % 2 === 0) {
          observer.next(value);
        }
        value++;
      }, 1000);

      return () => clearInterval(interval);
    });


    this.streams = [
      getStreamObj(
        Observable.create((observer: Subject<string>) => {
          observer.next('Hello');
          observer.next('World');
          observer.complete();
        }),
        `(observer: Subject<string>) => {
          observer.next('Hello');
          observer.next('World');
          observer.complete();
        }`,
        `Поток выстреливает несколько значений, затем завершается`
      ),
      getStreamObj(
        Observable.create((observer: Subject<string>) => {
          observer.next('Bye');
          observer.next('World');
          observer.error('Error');
        }),
        `Observable.create((observer: Subject<string>) => {
          observer.next('Bye');
          observer.next('World');
          observer.error('Error');
        }`,
        `Поток выстреливает несколько значений, затем завершается ошибкой`
      ),
      getStreamObj(
        source1$,
        `Observable.create((observer: Subject<number>) => {
          let value = 0;
          const interval = setInterval(() => {
            if (value % 2 === 0) {
              observer.next(value);
            }
            value++;
          }, 1000);
          return () => clearInterval(interval);
        }`,
        `Поток стреляет значениями, с заданным промежутком`
      ),
    ];
  }
}
