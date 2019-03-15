import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Stream,  } from '../../app.interface';
import { getStreamObj } from '../../utils/utils';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.pug',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit, OnDestroy {

  from1$: Observable<number> = from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  from2$: Observable<number> = from(new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  }));
  from3$: Observable<number> = from(new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(1);
    }, 3000);
  }));

  streams: Stream[];
  active = true;

  toogle() {
    this.active = !this.active;
  }

  createStreams() {
    this.streams = [
      getStreamObj(this.from1$, 'from([1, 2, 3, 4, 5, 6, 7, 8, 9])', 'from из массива'),
      getStreamObj(this.from2$, `from(new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(1);
        }, 2000);
      }))`, 'from из промиса'),
      getStreamObj(this.from3$, `from(new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(1);
        }, 3000);
      }))`, 'from из reject'),
    ];
  }

  ngOnInit() {
    this.createStreams();
  }

  ngOnDestroy() {
    console.log('Destroy');
  }
}
