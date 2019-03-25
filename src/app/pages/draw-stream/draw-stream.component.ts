import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { prepend, length, dropLast, forEachObjIndexed, append, type, split, propOr, prop } from 'ramda';
import { Stream } from '../app.interface';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-draw-stream',
  templateUrl: './draw-stream.component.pug',
  styleUrls: ['./draw-stream.component.scss']
})
export class DrawStreamComponent implements OnInit, OnDestroy {
  @Input() stream: Stream | Observable<any>;
  values: any[] = [];
  name: string;
  subctiption: Subscription;
  active = true;
  pause = false;

  get numMaxValues(): number {
    return propOr(30, 'numMaxValues', this.stream);
  }

  ngOnInit(): void {
    const stream = propOr(this.stream, 'values', this.stream);

    this.subctiption = stream.subscribe(
      streamValue => {
        if (this.pause) { return; }
        if (length(this.values) > this.numMaxValues) {
          this.values = dropLast(1, this.values);
        }
        this.values = prepend(streamValue, this.values);
        console.log(streamValue);
      }, error => {
        this.values = prepend({ val: 'error', shape: 'cross', color: 'red' }, this.values);
        this.active = false;
        console.log(error);
      }, () => {
        this.values = prepend({ val: 'completed', shape: 'block', color: 'black' }, this.values);
        this.active = false;
      });
  }

  isValSpecial(val: any) {
    return type(val) === 'Object' || type(val) === 'Function';
  }

  showVal(val: any): string {
    const value = propOr(val, 'val', val);

    switch (type(value)) {
      case 'Object':
      case 'Function':
      case 'MouseEvent':

        if (this.isValObservable(value)) {
          let result = '';

          value.pipe(take(5)).subscribe(
            shot => {
              result = result.concat(`${ shot }, `);
            },
          );
          return result;
        }
        return type(value);
      case 'Date':
        return split('GMT', value.toString())[0];
      case 'Array':
        const strArr = prepend('[ ', append(' ]', value)).toString();
        const index = strArr.indexOf(',');

        return strArr.slice(0, index) + strArr.slice(index + 1);

      default:
        return value;
    }
  }

  showValDetails(val: any): string[] {
    let details = [];
    switch (type(val)) {
      case 'Object':
      case 'MouseEvent':
        forEachObjIndexed((value, key) => {
          details = append(` ${key}:${value}`, details);
        }, val);
        break;
      case 'Function':
        details = append(val, details);
    }

    return details;
  }

  getCssClasses(value: Stream | any): string[] {
    const classes = [];
    if (value.shape) {
      classes.push(`stream__value--${ value.shape }`);
      classes.push(`stream__value--${ value.color }`);
    }

    if (this.isValObservable(value)) {
      classes.push(`stream__value--observable`);
    }

    return classes;
  }

  isValObservable(val: any): boolean {
    return !!prop('subscribe', val);
  }

  ngOnDestroy(): void {
    this.subctiption.unsubscribe();
  }

  toogle(): void {
    this.pause = !this.pause;
  }
}
