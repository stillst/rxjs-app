import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponent } from './creation/create/create.component';
import { DrawStreamComponent } from './draw-stream/draw-stream.component';
import { IntervalComponent } from './creation/interval/interval.component';
import { FromComponent } from './creation/from/from.component';
import { FromEventComponent  } from './creation/from-event/from-event.component';
import { OfComponent } from './creation/of/of.component';
import { TimerComponent } from './creation/timer/timer.component';
import { DeferComponent } from './creation/defer/defer.component';
import { EmptyComponent } from './creation/empty/empty.component';
import { RangeComponent } from './creation/range/range.component';
import { DefaultIfEmptyComponent } from './conditional/default-If-empty/default-if-empty.component';
import { EveryComponent } from './conditional/every/every.component';
import { IifComponent } from './conditional/iif/iif.component';
import { SequnceEqualComponent } from './conditional/sequnce-equal/sequnce-equal.component';
import { CombineLatestComponent } from './combination/combineLatest/combine-latest.component';
import { CombineAllComponent } from './combination/combine-all/combine-all.component';
import { ConcatComponent } from './combination/concat/concat.component';
import { MergeComponent } from './combination/merge/merge.component';

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
    EmptyComponent,
    RangeComponent,
    DefaultIfEmptyComponent,
    EveryComponent,
    IifComponent,
    SequnceEqualComponent,
    CombineLatestComponent,
    CombineAllComponent,
    ConcatComponent,
    MergeComponent
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
