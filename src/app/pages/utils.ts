import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { mergeRight, length } from 'ramda';
import { StreamValueShape, StreamValueColor } from './app.interface';
import { shapes, colors } from './app.constant';

export function getStreamObj(values: Observable<any>, code: string, description = '', randomized = false) {
  return {
    code,
    description,
    values: randomized ? randomizeStreamValuesView(values) : values,
  };
}

function randomizeStreamValuesView(stream: Observable<any>) {
  return stream.pipe(
    map(val => mergeRight({shape: getRandomShape(), color: getRandomColor() }, { val: val } ))
  );
}

function getRandomShape(): StreamValueShape {
  return shapes[getRandomNumber(0, length(shapes) - 1)];
}

function getRandomColor(): StreamValueColor {
  return colors[getRandomNumber(0, length(colors) - 1)];
}

/**
 * Returns a random number between min and max
 */
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
