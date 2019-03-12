import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, Subscription, interval, merge } from 'rxjs';
import { findIndex, has } from 'ramda';
import { Stream } from '../app.interface';

@Component({
  selector: 'app-draw-stream',
  templateUrl: './draw-stream.component.pug',
  styleUrls: ['./draw-stream.component.scss']
})
export class DrawStreamComponent implements OnInit, OnDestroy {
  @Input() streams: Stream[];
  streamsValues = [];
  subctiptions = {};

  ngOnInit() {
    this.streams.forEach((stream: Stream) => {
      stream.stream.subscribe(streamValue => {

        let index = findIndex(has(stream.name))(this.streamsValues);

        if (index === -1) {
          this.streamsValues.push({[stream.name]: []});
        }

        index = findIndex(has(stream.name))(this.streamsValues);

        this.streamsValues[index][stream.name].push(streamValue);

        console.log('streamsValues', this.streamsValues);
      });
    });
  }

  ngOnDestroy() {
  }
}
