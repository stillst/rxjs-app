import { Route } from '@angular/router';
import { ColdHotComponent } from './cold-hot/cold-hot.component';
import { UnsubscribeCoolComponent } from './unsubscribe-cool/unsubscribe-cool.component';
import { CachingComponent } from './caching/caching.component';

export const tasksPagesRoutes: Route[] = [
  { path: 'cold-hot', component: ColdHotComponent },
  { path: 'unsubscribe-cool', component: UnsubscribeCoolComponent },
  { path: 'caching', component: CachingComponent },
];
