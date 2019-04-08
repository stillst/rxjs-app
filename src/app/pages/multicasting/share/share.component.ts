import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { share } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.pug',
})
export class ShareComponent {
  constructor(private http$: HttpClient) {

  }

  source1$ = this.http$.get<any>('https://yesno.wtf/api');
  source1: Stream = getStreamObj(this.source1$, `this.http$.get('https://yesno.wtf/api')`);

  source2$ = this.http$.get<any>('https://yesno.wtf/api')
    .pipe(share());

  source2: Stream = getStreamObj(this.source2$, `this.http$.get('https://yesno.wtf/api')`);
}
