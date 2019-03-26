import { Route } from '@angular/router';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { DebounceComponent } from './debounce/debounce.component';

export const filteringPagesRoutes: Route[] = [
  { path: 'debounce-time', component: DebounceTimeComponent },
  { path: 'debounce', component: DebounceComponent },
];
