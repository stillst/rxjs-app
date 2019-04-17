import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { pluck } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.pug',
})
export class AjaxComponent implements OnInit {
  streams: Stream[];

  ngOnInit() {
    this.createStreams();
  }

  createStreams(): void {
    this.streams = [
      getStreamObj(ajax('https://yesno.wtf/api'), `ajax('https://yesno.wtf/api')`, `Поток из запроса`),
      getStreamObj(
        ajax('https://yesno.wtf/api').pipe(pluck('response')),
        `ajax('https://yesno.wtf/api').pipe(pluck('response')`,
        `Поток из запроса, берем ответ`
      ),
    ];
  }
}
