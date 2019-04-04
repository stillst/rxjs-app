import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.pug',
})
export class SubjectComponent implements OnInit {

  sub = new Subject();
  source1: Stream = getStreamObj(this.sub, ``);
  source2: Stream = getStreamObj(this.sub, ``, '', false, 2000);

  ngOnInit(): void {
    this.sub.next(0);
    setTimeout(() => this.sub.next(1), 500);
    setTimeout(() => this.sub.next(2), 1000);
    setTimeout(() => this.sub.next(3), 2000);
    setTimeout(() => this.sub.next(4), 3000);
    setTimeout(() => this.sub.next(5), 4000);
    setTimeout(() => this.sub.complete(), 5000);
  }
}
