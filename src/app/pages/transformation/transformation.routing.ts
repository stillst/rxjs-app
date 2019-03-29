import { Route } from '@angular/router';
import { BufferComponent } from './buffer/buffer.component';
import { BufferCountComponent } from './buffer-count/buffer-count.component';
import { BufferTimeComponent } from './buffer-time/buffer-time.component';
import { BufferToggleComponent } from './buffer-toogle/buffer-toogle.component';
import { BufferWhenComponent } from './buffer-when/buffer-when.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ConcatMapToComponent } from './concat-map-to/concat-map-to.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { ExpandComponent } from './expand/expand.component';
import { GroupByComponent } from './group-by/group-by.component';

export const transformationPagesRoutes: Route[] = [
  { path: 'buffer', component: BufferComponent },
  { path: 'buffer-count', component: BufferCountComponent },
  { path: 'buffer-time', component: BufferTimeComponent },
  { path: 'buffer-toogle', component: BufferToggleComponent },
  { path: 'buffer-when', component: BufferWhenComponent },
  { path: 'concat-map', component: ConcatMapComponent },
  { path: 'concat-map-to', component: ConcatMapToComponent },
  { path: 'merge-map', component: MergeMapComponent },
  { path: 'switch-map', component: SwitchMapComponent },
  { path: 'exhaust-map', component: ExhaustMapComponent },
  { path: 'expand', component: ExpandComponent },
  { path: 'group-by', component: GroupByComponent },
];
