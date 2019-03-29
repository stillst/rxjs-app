import { Route } from '@angular/router';
import { BufferComponent } from './buffer/buffer.component';
import { BufferCountComponent } from './buffer-count/buffer-count.component';
import { BufferTimeComponent } from './buffer-time/buffer-time.component';
import { BufferToggleComponent } from './buffer-toogle/buffer-toogle.component';
import { BufferWhenComponent } from './buffer-when/buffer-when.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ConcatMapToComponent } from './concat-map-to/concat-map-to.component';

export const transformationPagesRoutes: Route[] = [
  { path: 'buffer', component: BufferComponent },
  { path: 'buffer-count', component: BufferCountComponent },
  { path: 'buffer-time', component: BufferTimeComponent },
  { path: 'buffer-toogle', component: BufferToggleComponent },
  { path: 'buffer-when', component: BufferWhenComponent },
  { path: 'concat-map', component:  ConcatMapComponent },
  { path: 'concat-map-to', component:  ConcatMapToComponent },
];
