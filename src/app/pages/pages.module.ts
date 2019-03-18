import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawStreamComponent } from './draw-stream/draw-stream.component';
import { IntervalComponent } from './interval/interval.component';
import { FromComponent } from './from/from.component';
import { OfComponent } from './of/of.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    DrawStreamComponent,
    IntervalComponent,
    FromComponent,
    OfComponent,
    TimerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DrawStreamComponent,
    IntervalComponent,
    FromComponent,
    OfComponent,
    TimerComponent,
  ]
})
export class PagesModule { }
