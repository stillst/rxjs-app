import { Observable } from 'rxjs';

export interface Stream {
  name: string;
  stream: Observable<any>;
}
