import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Stream } from '../../app.interface';
import { getStreamObj, generateDoubles } from '../../utils';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.pug',
})
export class FromComponent implements OnInit {
  streams: Stream[];

  ngOnInit() {
    this.createStreams();
  }

  createStreams(): void {

    const source1 = new Map();
    source1.set(1, 'Hi');
    source1.set(2, 'Bye');

    this.streams = [
      getStreamObj(from([1, 2, 3, 4, 5, 6, 7, 8, 9]), `from([1, 2, 3, 4, 5, 6, 7, 8, 9])`, `from из массива`),
      getStreamObj(
        from(new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(1);
          }, 2000);
        })),
        `from(new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(1);
          }, 2000);
        }))`,
        `создание потока с помощью from из промиса`
      ),
      getStreamObj(
        from(new Promise((resolve, reject) => {
          setTimeout(() => {
            reject(1);
          }, 3000);
        })),
        `from(new Promise((resolve, reject) => {
          setTimeout(() => {
            reject(1);
          }, 3000);
        }))`,
        'создание потока с помощью from из промиса (reject)'
      ),
      getStreamObj(
        from(source1),
        ` const map = new Map();
          map.set(1, 'Hi');
          map.set(2, 'Bye');
          from(map)`,
        'создание потока с помощью from из Map()'
      ),
      getStreamObj(
        from('Hello World'),
        `from('Hello World')`,
        'создание потока с помощью from из строки'
      ),
      getStreamObj(
        from(generateDoubles(3)),
        `function* generateDoubles(seed) {
          let i = seed;
          while (i < 1000) {
            yield i;
            i = 2 * i; // double it
          }
        }

        const iterator = generateDoubles(3);
        const result = from(iterator);

        `,
        'создание потока с помощью from из iterable (from a generator)'
      ),
    ];
  }
}
