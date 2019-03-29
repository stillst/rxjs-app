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
import { MapComponent } from './map/map.component';
import { MapToComponent } from './map-to/map-to.component';
import { PartitionComponent } from './partition/partition.component';
import { PluckComponent } from './pluck/pluck.component';
import { ReduceComponent } from './reduce/reduce.component';
import { ScanComponent } from './scan/scan.component';
import { ToArrayComponent } from './to-array/to-array.component';

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
  { path: 'map', component: MapComponent },
  { path: 'map-to', component: MapToComponent },
  { path: 'partition', component: PartitionComponent },
  { path: 'pluck', component: PluckComponent },
  { path: 'reduce', component: ReduceComponent },
  { path: 'scan', component: ScanComponent },
  { path: 'to-array', component: ToArrayComponent },
];
