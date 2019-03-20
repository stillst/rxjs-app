import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponent } from './create/create.component';
import { DrawStreamComponent } from './draw-stream/draw-stream.component';
import { IntervalComponent } from './interval/interval.component';
import { FromComponent } from './from/from.component';
import { FromEventComponent  } from './from-event/from-event.component';
import { OfComponent } from './of/of.component';
import { TimerComponent } from './timer/timer.component';
import { DeferComponent } from './defer/defer.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [
    DrawStreamComponent,
    IntervalComponent,
    FromEventComponent,
    FromComponent,
    OfComponent,
    TimerComponent,
    CreateComponent,
    DeferComponent,
    EmptyComponent
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
