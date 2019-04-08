import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.pug',
})
export class ShareReplayComponent {
  constructor(private http$: HttpClient) {

  }

  source1$ = this.http$.get<any>('https://yesno.wtf/api');
  source1: Stream = getStreamObj(this.source1$, `this.http$.get('https://yesno.wtf/api')`);

  source2$ = this.http$.get<any>('https://yesno.wtf/api')
    .pipe(shareReplay(20));

  source2: Stream = getStreamObj(this.source2$, `this.http$.get('https://yesno.wtf/api')`);
}
