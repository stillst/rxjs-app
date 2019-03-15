import { Observable } from 'rxjs';

export interface Stream {
  values: Observable<any>;
  name?: string;
  code?: string;
  description?: string;
  numMaxValues?: number;
}

export type StreamValueShape = 'circle' | 'square';

export type StreamValueColor = 'red' | 'green' | 'blue' | 'black';
