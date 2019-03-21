import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { Stream,  } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.pug',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {

  @ViewChild('button') button;
  clicks$: Observable<any>;

  streams: Stream[];
  active = true;

  toogle() {
    this.active = !this.active;
  }

  createStreams() {
    this.streams = [
      getStreamObj(
        fromEvent(this.button.nativeElement, 'click'), 'fromEvent(this.button.nativeElement, "click")',
        'Observable from mouse clicks'
      ),
    ];
  }

  ngOnInit() {
    this.createStreams();
  }
}
