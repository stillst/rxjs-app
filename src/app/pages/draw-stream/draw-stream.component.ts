import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { prepend, length, dropLast, forEachObjIndexed, append, type, split } from 'ramda';
import { Stream } from '../app.interface';

@Component({
  selector: 'app-draw-stream',
  templateUrl: './draw-stream.component.pug',
  styleUrls: ['./draw-stream.component.scss']
})
export class DrawStreamComponent implements OnInit, OnDestroy {
  @Input() stream: Stream;
  values: any[] = [];
  name: string;
  subctiption: Subscription;
  pause = false;

  get numMaxValues(): number {
    return this.stream.numMaxValues || 30;
  }

  ngOnInit(): void {
    this.subctiption = this.stream.values.subscribe(
      streamValue => {
        if (this.pause) { return; }
        if (length(this.values) > this.numMaxValues) {
          this.values = dropLast(1, this.values);
        }
        this.values = prepend(streamValue, this.values);
        console.log(streamValue);
      }, error => {
        this.values = prepend({ val: 'error', shape: 'cross', color: 'red' }, this.values);
        console.log(error);
      }, () => {
        this.values = prepend({ val: 'completed', shape: 'block', color: 'black' }, this.values);
      });
  }

  isValSpecial(val: any) {
    return type(val) === 'Object' || type(val) === 'Function';
  }

  showVal(val: any): string {
    switch (type(val)) {
      case 'Object':
      case 'Function':
        return type(val);
      case 'Date':
        return split('GMT', val.toString())[0];
      default:
        return val;
    }
  }

  showValDetails(val: any): string[] {
    let details = [];
    switch (type(val)) {
      case 'Object':
        forEachObjIndexed((value, key) => {
          details = append(` ${key}:${value}`, details);
        }, val);
        break;
      case 'Function':
        details = append(val, details);
    }

    return details;
  }

  onClick(val: object) {
    console.log(val);
  }

  ngOnDestroy(): void {
    this.subctiption.unsubscribe();
  }

  toogle(): void {
    this.pause = !this.pause;
  }
}
