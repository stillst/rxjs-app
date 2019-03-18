import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { prepend, length, dropLast } from 'ramda';
import { Stream } from '../app.interface';

@Component({
  selector: 'app-draw-stream',
  templateUrl: './draw-stream.component.pug',
  styleUrls: ['./draw-stream.component.scss']
})
export class DrawStreamComponent implements OnInit, OnDestroy {
  @Input() stream: Stream;
  values: any[] = [];
  name: string;
  subctiption: Subscription;
  pause = false;

  get numMaxValues(): number {
    return this.stream.numMaxValues || 30;
  }

  ngOnInit(): void {
    this.subctiption = this.stream.values.subscribe(
      streamValue => {
        if (this.pause) { return; }
        if (length(this.values) > this.numMaxValues) {
          this.values = dropLast(1, this.values);
        }
        this.values = prepend(streamValue, this.values);
        console.log(streamValue);
      }, error => {
        this.values = prepend({ val: 'error', shape: 'cross', color: 'red' }, this.values);
        console.log(error);
      }, () => {
        this.values = prepend({ val: 'completed', shape: 'block', color: 'black' }, this.values);
      });
  }

  ngOnDestroy(): void {
    this.subctiption.unsubscribe();
  }

  toogle(): void {
    this.pause = !this.pause;
  }
}
