import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stream,  } from '../app.interface';
import { getStreamObj } from '../utils';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.pug',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {

  of1$: Observable<number> = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
  of2$ = of({ name: 'Brian', type: 'Dog', sound: 'bark' }, [1, 2, 3], function hello() { return 'Hello'; });
  streams: Stream[];
  active = true;

  toogle() {
    this.active = !this.active;
  }

  createStreams() {
    this.streams = [
      getStreamObj(this.of1$, 'of(1, 2, 3, 4, 5, 6, 7, 8, 9)', 'Поток из чисел'),
      getStreamObj(this.of2$, 'of({ name: "Brian" }, [1, 2, 3], function hello() { return "Hello"; })', 'Поток из чисел'),
    ];
  }

  ngOnInit() {
    this.createStreams();
  }
}
