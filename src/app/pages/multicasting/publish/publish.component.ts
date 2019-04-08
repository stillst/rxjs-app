import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { publish } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.pug',
})
export class PublishComponent implements OnInit {
  constructor(private http$: HttpClient) {

  }

  source1$ = this.http$.get<any>('https://yesno.wtf/api');
  source1: Stream = getStreamObj(this.source1$, `this.http$.get('https://yesno.wtf/api')`);

  source2$ = this.http$.get<any>('https://yesno.wtf/api')
    .pipe(publish());

  source2: Stream = getStreamObj(this.source2$, `this.http$.get('https://yesno.wtf/api')`);

  ngOnInit(): void {
    (this.source2$ as ConnectableObservable<any>).connect();
  }
}
