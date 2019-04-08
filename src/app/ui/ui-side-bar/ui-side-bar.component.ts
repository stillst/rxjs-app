import { Component } from '@angular/core';
import { map, prop } from 'ramda';
import { filteringPagesRoutes } from '../../pages/filtering/filtering.routing';
import { combinationPagesRoutes } from '../../pages/combination/combination.routing';
import { creationPagesRoutes } from '../../pages/creation/creation.routing';
import { conditionalPagesRoutes } from '../../pages/conditional/conditional.routing';
import { transformationPagesRoutes } from '../../pages/transformation/transformation.routing';
import { subjectsPagesRoutes } from '../../pages/subjects/subjects.routing';
import { tasksPagesRoutes } from '../../pages/tasks/tasks.routing';
import { multicastingPagesRoutes } from '../../pages/multicasting/multicasting.routing';

@Component({
  selector: 'app-side-bar',
  templateUrl: './ui-side-bar.component.pug',
  styleUrls: ['./ui-side-bar.component.scss']
})
export class UiSideBarComponent {
  get filterLinks() {
    return map(prop('path'), filteringPagesRoutes);
  }

  get combinationLinks() {
    return map(prop('path'), combinationPagesRoutes);
  }

  get creationLinks() {
    return map(prop('path'), creationPagesRoutes);
  }

  get conditionalLinks() {
    return map(prop('path'), conditionalPagesRoutes);
  }

  get transformationLinks() {
    return map(prop('path'), transformationPagesRoutes);
  }

  get subjectsLinks() {
    return map(prop('path'), subjectsPagesRoutes);
  }

  get tasksLinks() {
    return map(prop('path'), tasksPagesRoutes);
  }

  get multicastingLinks() {
    return map(prop('path'), multicastingPagesRoutes);
  }
}
