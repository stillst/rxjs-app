import { Route } from '@angular/router';
import { CombineLatestComponent  } from './combine-latest/combine-latest.component';
import { CombineAllComponent } from './combine-all/combine-all.component';
import { ConcatComponent } from './concat/concat.component';
import { MergeComponent } from './merge/merge.component';
import { RaceComponent } from './race/race.component';
import { StartWithComponent } from './start-with/start-with.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';
import { ZipComponent } from './zip/zip.component';

export const combinationPagesRoutes: Route[] = [
  { path: 'combine-latest', component: CombineLatestComponent },
  { path: 'combine-all', component: CombineAllComponent },
  { path: 'concat', component: ConcatComponent },
  { path: 'merge', component: MergeComponent },
  { path: 'race', component: RaceComponent },
  { path: 'start-with', component: StartWithComponent },
  { path: 'with-latest-from', component: WithLatestFromComponent },
  { path: 'zip', component: ZipComponent },
];
