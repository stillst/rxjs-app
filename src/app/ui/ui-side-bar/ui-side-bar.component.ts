import { Component, ChangeDetectionStrategy } from '@angular/core';

import { map, prop } from 'ramda';

import { filteringPagesRoutes } from '../../pages/filtering/filtering.routing';
import { combinationPagesRoutes } from '../../pages/combination/combination.routing';
import { creationPagesRoutes } from '../../pages/creation/creation.routing';
import { conditionalPagesRoutes } from '../../pages/conditional/conditional.routing';
import { transformationPagesRoutes } from '../../pages/transformation/transformation.routing';
import { subjectsPagesRoutes } from '../../pages/subjects/subjects.routing';
import { tasksPagesRoutes } from '../../pages/tasks/tasks.routing';
import { multicastingPagesRoutes } from '../../pages/multicasting/multicasting.routing';

const path = map(prop('path'));
const capitalize = str => str.charAt(0).toUpperCase() + str.substring(1);

@Component({
  selector: 'app-side-bar',
  templateUrl: './ui-side-bar.component.pug',
  styleUrls: ['./ui-side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSideBarComponent {
  get filterLinks() {
    return path(filteringPagesRoutes);
  }

  get combinationLinks() {
    return path(combinationPagesRoutes);
  }

  get creationLinks() {
    return path(creationPagesRoutes);
  }

  get conditionalLinks() {
    return path(conditionalPagesRoutes);
  }

  get transformationLinks() {
    return path(transformationPagesRoutes);
  }

  get subjectsLinks() {
    return path(subjectsPagesRoutes);
  }

  get tasksLinks() {
    return path(tasksPagesRoutes);
  }

  get multicastingLinks() {
    return path(multicastingPagesRoutes);
  }

  camelCase(link) {
    return link.split('-').map((item, index) => index > 0
      ? capitalize(item)
      : item).join('');
  }
}
