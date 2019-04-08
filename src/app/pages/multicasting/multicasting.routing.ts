import { Route } from '@angular/router';
import { ShareComponent } from './share/share.component';
import { MulticastingComponent } from './multicasting/multicasting.component';
import { PublishComponent } from './publish/publish.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';

export const multicastingPagesRoutes: Route[] = [
  { path: 'share', component:  ShareComponent },
  { path: 'multicasting', component:  MulticastingComponent },
  { path: 'publish', component:  PublishComponent },
  { path: 'share-replay', component: ShareReplayComponent },
];
