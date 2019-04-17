import { Component, OnInit } from '@angular/core';
import { generate } from 'rxjs';
import { Stream } from '../../app.interface';
import { getStreamObj } from '../../utils';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.pug',
})
export class  GenerateComponent implements OnInit {
  streams: Stream[];

  ngOnInit() {
    this.createStreams();
  }

  createStreams(): void {
    this.streams = [
      getStreamObj(
        generate(2, x => x <= 8, x => x + 3),
        `generate(2, x => x <= 8, x => x + 3)`,
        `поток из цикла`
      ),
      getStreamObj(
        generate(200, x => x > 123, x => x - 13),
        `generate(200, x => x > 123, x => x - 13)`,
        `поток из цикла`
      ),
      getStreamObj(
        generate(2, x => x <= 18, x => x + 2, x => '.'.repeat(x)),
        `generate(2, x => x <= 18, x => x + 2, x => '.'.repeat(x))`,
        `поток из цикла, с функцией результата`
      ),
    ];
  }
}
