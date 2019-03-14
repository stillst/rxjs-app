import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval, merge as rxMerge, of } from 'rxjs';
import { mergeRight, length } from 'ramda';
import { map } from 'rxjs/operators';
import { Stream, StreamValueShape, StreamValueColor } from '../../app.interface';
import { shapes, colors } from '../../app.constant';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.pug',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit, OnDestroy {

  interval1$: Observable<number> = interval(1000);
  interval2$: Observable<number> = interval(2000);
  interval3$: Observable<number> = interval(3000);

  streams: Stream[];
  interval1Subscription: Subscription;
  interval2Subscription: Subscription;
  interval3Subscription: Subscription;
  mergeSubscription: Subscription;

  active = true;

  toogle() {
    this.active = !this.active;
    console.log(this.active, 'this.active');
  }


  constructor() {

  }

  streamSubscribe() {
    this.interval1Subscription = this.interval1$.subscribe((val) => {
      console.log(`interval1 ${ val }`);
    });

    this.interval2Subscription = this.interval2$.subscribe((val) => {
      console.log(`interval2 ${ val }`);
    });

    this.interval3Subscription = this.interval3$.subscribe((val) => {
      console.log(`interval3 ${ val }`);
    });
  }


  createStreams() {
    this.streams = [ { name: 'interval 1', values: this.randomizeStreamValuesView(this.interval1$) },
      { name: 'interval 2', values: this.randomizeStreamValuesView(this.interval2$) },
      { name: 'interval 3', values: this.randomizeStreamValuesView(this.interval3$) },
    ];
  }

  randomizeStreamValuesView(stream: Observable<any>) {
    return stream.pipe(
      map(val => mergeRight({shape: this.randomShape, color: this.randomColor }, { val: val } ))
    );
  }

  get randomShape(): StreamValueShape {
    return shapes[this.getRandomNumber(0, length(shapes) - 1)];
  }

  get randomColor(): StreamValueColor {
    return colors[this.getRandomNumber(0, length(colors) - 1)];
  }

  /**
   * Returns a random number between min and max
   */
  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit() {
    this.createStreams();
  }

  ngOnDestroy() {
    console.log('Destroy');
  }
}
