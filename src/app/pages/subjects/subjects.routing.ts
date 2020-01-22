import { Route } from '@angular/router';

import { SubjectComponent } from './subject/subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';

export const subjectsPagesRoutes: Route[] = [
  { path: 'subject', component:  SubjectComponent },
  { path: 'behavior-subject', component:  BehaviorSubjectComponent },
  { path: 'replay-subject', component:  ReplaySubjectComponent },
  { path: 'async-subject', component:  AsyncSubjectComponent },
];
