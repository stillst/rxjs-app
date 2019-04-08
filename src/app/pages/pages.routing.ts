import { Route } from '@angular/router';
import { creationPagesRoutes } from './creation/creation.routing';
import { conditionalPagesRoutes } from './conditional/conditional.routing';
import { combinationPagesRoutes } from './combination/combination.routing';
import { filteringPagesRoutes } from './filtering/filtering.routing';
import { transformationPagesRoutes } from './transformation/transformation.routing';
import { subjectsPagesRoutes } from './subjects/subjects.routing';
import { tasksPagesRoutes } from './tasks/tasks.routing';
import { multicastingPagesRoutes } from './multicasting/multicasting.routing';

export const pagesRoutes: Route[] = [
  ...creationPagesRoutes,
  ...conditionalPagesRoutes,
  ...combinationPagesRoutes,
  ...filteringPagesRoutes,
  ...transformationPagesRoutes,
  ...subjectsPagesRoutes,
  ...tasksPagesRoutes,
  ...multicastingPagesRoutes,
];
