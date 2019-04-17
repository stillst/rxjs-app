import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.pug',
})
export class OfComponent implements OnInit {
  streams: Stream[];

  ngOnInit() {
    this.createStreams();
  }

  createStreams(): void {
    this.streams = [
      getStreamObj(of(1, 2, 3, 4, 5, 6, 7, 8, 9), `of(1, 2, 3, 4, 5, 6, 7, 8, 9)`, `Поток из последовательности чисел`),
      getStreamObj(
        of({ name: 'Brian', type: 'Dog', sound: 'bark' }, [1, 2, 3], function hello() { return 'Hello'; }),
        `of({ name: "Brian" }, [1, 2, 3], function hello() { return "Hello"; })`,
        `Поток из перечня разнотипных объектов`
      ),
      getStreamObj(
        of([1, 2, 3, 4, 5, 6, 7, 8, 9]),
        `of([1, 2, 3, 4, 5, 6, 7, 8, 9])`,
        `Поток из массива`
      ),
    ];
  }
}
