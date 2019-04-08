import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prop, map } from 'ramda';
import { filteringPagesRoutes } from '../pages/filtering/filtering.routing';
import { combinationPagesRoutes } from '../pages/combination/combination.routing';
import { conditionalPagesRoutes } from '../pages/conditional/conditional.routing';
import { creationPagesRoutes } from '../pages/creation/creation.routing';
import { transformationPagesRoutes } from '../pages/transformation/transformation.routing';
import { subjectsPagesRoutes } from '../pages/subjects/subjects.routing';
import { tasksPagesRoutes } from '../pages/tasks/tasks.routing';

import { DrawStreamComponent } from './draw-stream/draw-stream.component';

const componentsList = [
  combinationPagesRoutes,
  conditionalPagesRoutes,
  creationPagesRoutes,
  filteringPagesRoutes,
  transformationPagesRoutes,
  subjectsPagesRoutes,
  tasksPagesRoutes,
];

@NgModule({
  declarations: [
    DrawStreamComponent,
    map(map(prop('component')))(componentsList)
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DrawStreamComponent,
  ]
})
export class PagesModule { }
