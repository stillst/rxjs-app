import { Component, OnInit, ViewChild } from '@angular/core';
import { throwError } from 'rxjs';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.pug',
})
export class ThrowErrorComponent implements OnInit {
  @ViewChild('button') button;
  streams: Stream[];

  ngOnInit() {
    this.createStreams();
  }

  createStreams(): void {
    this.streams = [
      getStreamObj(
        throwError('Ошибка'),
        `throwError('Ошибка')`,
        `Поток сразу же стреляет ошибкой`
      ),
    ];
  }
}
