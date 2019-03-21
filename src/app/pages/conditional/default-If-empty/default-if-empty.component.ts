import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { defaultIfEmpty } from 'rxjs/operators';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-default-if-empty',
  templateUrl: './default-if-empty.component.pug',
  styleUrls: ['./default-if-empty.component.scss']
})
export class DefaultIfEmptyComponent implements OnInit {

  emptyStream$ = empty();
  defaultIfEmpty$ = this.emptyStream$.pipe(defaultIfEmpty('Observable.empty()!'));

  source: Stream = getStreamObj(this.emptyStream$, 'empty()', 'Empty stream');
  result: Stream = getStreamObj(this.defaultIfEmpty$, 'empty().pipe(defaultIfEmpty("Observable.empty()!))"', 'Empty stream');

  active = true;

  toogle() {
    this.active = !this.active;
  }

  ngOnInit() {
    // this.createStreams();
  }
}
