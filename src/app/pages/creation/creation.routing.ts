import { Route } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { IntervalComponent } from './interval/interval.component';
import { FromComponent } from './from/from.component';
import { FromEventComponent  } from './from-event/from-event.component';
import { OfComponent } from './of/of.component';
import { TimerComponent } from './timer/timer.component';
import { DeferComponent } from './defer/defer.component';
import { EmptyComponent } from './empty/empty.component';
import { RangeComponent } from './range/range.component';

export const creationPagesRoutes: Route[] = [
  { path: 'interval', component: IntervalComponent },
  { path: 'from', component: FromComponent },
  { path: 'from-event', component: FromEventComponent  },
  { path: 'of', component: OfComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'create', component: CreateComponent },
  { path: 'defer', component: DeferComponent },
  { path: 'empty', component: EmptyComponent },
  { path: 'range', component: RangeComponent },
];
