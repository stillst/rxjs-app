import { Route } from '@angular/router';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';

export const filteringPagesRoutes: Route[] = [
  { path: 'debounce-time', component: DebounceTimeComponent },
];
