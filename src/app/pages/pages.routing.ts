import { Route } from '@angular/router';
import { CreateComponent } from './creation/create/create.component';
import { IntervalComponent } from './creation/interval/interval.component';
import { FromComponent } from './creation/from/from.component';
import { FromEventComponent  } from './creation/from-event/from-event.component';
import { OfComponent } from './creation/of/of.component';
import { TimerComponent } from './creation/timer/timer.component';
import { DeferComponent } from './creation/defer/defer.component';
import { EmptyComponent } from './creation/empty/empty.component';
import { RangeComponent } from './creation/range/range.component';
import { DefaultIfEmptyComponent } from './conditional/default-If-empty/default-if-empty.component';
import { EveryComponent } from './conditional/every/every.component';
import { IifComponent } from './conditional/iif/iif.component';
import { SequnceEqualComponent } from './conditional/sequnce-equal/sequnce-equal.component';
import { CombineLatestComponent  } from './combination/combineLatest/combine-latest.component';
import { CombineAllComponent } from './combination/combine-all/combine-all.component';

export const pagesRoutes: Route[] = [
  { path: 'interval', component: IntervalComponent },
  { path: 'from', component: FromComponent },
  { path: 'from-event', component: FromEventComponent  },
  { path: 'of', component: OfComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'create', component: CreateComponent },
  { path: 'defer', component: DeferComponent },
  { path: 'empty', component: EmptyComponent },
  { path: 'range', component: RangeComponent },
  { path: 'default-if-empty', component: DefaultIfEmptyComponent },
  { path: 'every', component: EveryComponent },
  { path: 'iif', component: IifComponent },
  { path: 'sequnce-equal', component: SequnceEqualComponent },
  { path: 'combine-latest', component: CombineLatestComponent },
  { path: 'combine-all', component: CombineAllComponent },
];
