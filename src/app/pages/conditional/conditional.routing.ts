import { Route } from '@angular/router';
import { DefaultIfEmptyComponent } from './default-If-empty/default-if-empty.component';
import { EveryComponent } from './every/every.component';
import { IifComponent } from './iif/iif.component';
import { SequnceEqualComponent } from './sequnce-equal/sequnce-equal.component';

export const conditionalPagesRoutes: Route[] = [
  { path: 'default-if-empty', component: DefaultIfEmptyComponent },
  { path: 'every', component: EveryComponent },
  { path: 'iif', component: IifComponent },
  { path: 'sequnce-equal', component: SequnceEqualComponent },
];
