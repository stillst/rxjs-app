import { Route } from '@angular/router';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { DebounceComponent } from './debounce/debounce.component';
import { DistinctComponent } from './distinct/distinct.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { ElementAtComponent } from './element-at/element-at.component';
import { FirstComponent } from './first/first.component';

export const filteringPagesRoutes: Route[] = [
  { path: 'debounce-time', component: DebounceTimeComponent },
  { path: 'debounce', component: DebounceComponent },
  { path: 'distinct', component: DistinctComponent },
  { path: 'distinct-until-changed', component: DistinctUntilChangedComponent },
  { path: 'element-at', component: ElementAtComponent },
  { path: 'first', component: FirstComponent },
];
