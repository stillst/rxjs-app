import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.pug',
})
export class EmptyComponent implements OnInit {
  streams: Stream[];

  ngOnInit() {
    this.createStreams();
  }

  createStreams(): void {
    this.streams = [
      getStreamObj(empty(),  `empty()`, `Поток, который сразу же завершается`),
      getStreamObj(
        empty().pipe(startWith(7)),
        `empty().pipe(startWith(7)`,
        `Поток, который выстроеливает начальным значением и сразу же завершается`
      ),
    ];
  }
}
