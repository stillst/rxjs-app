import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prop, map } from 'ramda';
import { filteringPagesRoutes } from '../pages/filtering/filtering.routing';
import { combinationPagesRoutes } from '../pages/combination/combination.routing';
import { conditionalPagesRoutes } from '../pages/conditional/conditional.routing';
import { creationPagesRoutes } from '../pages/creation/creation.routing';
import { DrawStreamComponent } from './draw-stream/draw-stream.component';

const componentsList = [
  combinationPagesRoutes,
  conditionalPagesRoutes,
  creationPagesRoutes,
  filteringPagesRoutes
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
