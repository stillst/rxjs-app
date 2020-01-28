import { Route } from '@angular/router';
import { ShareComponent } from './share/share.component';
import { MulticastingComponent } from './multicasting/multicasting.component';
import { PublishComponent } from './publish/publish.component';
import { PublishReplayComponent } from './publish-replay/publish-replay.component';
import { PublishBehaviorComponent } from './publish-behavior/publish-behavior.component';
import { PublishLastComponent } from './publish-last/publish-last.component';

import { ShareReplayComponent } from './share-replay/share-replay.component';

export const multicastingPagesRoutes: Route[] = [
  { path: 'multicasting', component:  MulticastingComponent },
  { path: 'publish', component:  PublishComponent },
  { path: 'publish-replay', component: PublishReplayComponent },
  { path: 'publish-behavior', component: PublishBehaviorComponent },
  { path: 'publish-last', component: PublishLastComponent },
  { path: 'share', component:  ShareComponent },
  { path: 'share-replay', component: ShareReplayComponent },
];
