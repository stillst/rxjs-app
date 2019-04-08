import { Route } from '@angular/router';
import { ColdHotComponent } from './cold-hot/cold-hot.component';

export const tasksPagesRoutes: Route[] = [
  { path: 'cold-hot', component:   ColdHotComponent },
];
