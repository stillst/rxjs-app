import { Route } from '@angular/router';

import { MulticastingComponent } from './multicasting/multicasting.component';
import { PublishComponent } from './publish/publish.component';
import { PublishReplayComponent } from './publish-replay/publish-replay.component';
import { PublishBehaviorComponent } from './publish-behavior/publish-behavior.component';
import { PublishLastComponent } from './publish-last/publish-last.component';
import { RefCountComponent } from './ref-count/ref-count.component';

import { ShareComponent } from './share/share.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';

export const multicastingPagesRoutes: Route[] = [
  { path: 'multicasting', component:  MulticastingComponent },
  { path: 'publish', component:  PublishComponent },
  { path: 'publish-behavior', component: PublishBehaviorComponent },
  { path: 'publish-last', component: PublishLastComponent },
  { path: 'publish-replay', component: PublishReplayComponent },
  { path: 'ref-count', component: RefCountComponent },
  { path: 'share', component:  ShareComponent },
  { path: 'share-replay', component: ShareReplayComponent },
];
