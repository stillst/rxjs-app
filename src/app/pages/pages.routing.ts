import { Route } from '@angular/router';
import { IntervalComponent } from './interval/interval.component';
import { FromComponent } from './from/from.component';
import { OfComponent } from './of/of.component';
import { TimerComponent } from './timer/timer.component';

export const pagesRoutes: Route[] = [
  { path: 'interval', component: IntervalComponent },
  { path: 'from', component: FromComponent },
  { path: 'of', component: OfComponent },
  { path: 'timer', component: TimerComponent }
];
