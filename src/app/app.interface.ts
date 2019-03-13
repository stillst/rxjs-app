import { Observable } from 'rxjs';

export interface Stream {
  name: string;
  values: Observable<any>;
  numMaxValues?: number;
}

export type StreamValueShape = 'circle' | 'square';

export type StreamValueColor = 'red' | 'green' | 'blue' | 'black';
