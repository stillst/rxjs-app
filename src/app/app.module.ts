import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { UiSideBarComponent } from './ui/ui-side-bar/ui-side-bar.component';
import { DrawStreamComponent } from './draw-stream/draw-stream.component';
import { UiMainComponent } from './ui/ui-main/ui-main.component';
import { CommonModule } from '@angular/common';

import { IntervalComponent } from './pages/interval/interval.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DrawStreamComponent,
    UiSideBarComponent,
    UiMainComponent,
    IntervalComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports: [CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
