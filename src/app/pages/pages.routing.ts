import { Route } from '@angular/router';
import { creationPagesRoutes } from './creation/creation.routing';
import { conditionalPagesRoutes } from './conditional/conditional.routing';
import { combinationPagesRoutes } from './combination/combination.routing';
import { filteringPagesRoutes } from './filtering/filtering.routing';

export const pagesRoutes: Route[] = [
  ...creationPagesRoutes,
  ...conditionalPagesRoutes,
  ...combinationPagesRoutes,
  ...filteringPagesRoutes,
];
