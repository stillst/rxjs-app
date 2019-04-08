import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatesComponent } from './create/create.component';
import { UiSideBarComponent } from './ui/ui-side-bar/ui-side-bar.component';
import { UiMainComponent } from './ui/ui-main/ui-main.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    CreatesComponent,
    UiSideBarComponent,
    UiMainComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule
  ],
  exports: [CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
