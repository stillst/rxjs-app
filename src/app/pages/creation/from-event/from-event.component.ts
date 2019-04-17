import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.pug',
})
export class FromEventComponent implements OnInit {
  @ViewChild('button') button;
  streams: Stream[];

  ngOnInit() {
    this.createStreams();
  }

  createStreams(): void {
    this.streams = [
      getStreamObj(
        fromEvent(document, 'click'),
        `fromEvent(document, "click")`,
        `Поток из всех кликов на странице`
      ),
      getStreamObj(
        fromEvent(this.button.nativeElement, 'click'),
        `fromEvent(this.button.nativeElement, "click")`,
        `Поток из кликов по кнопке`
      ),
    ];
  }
}
