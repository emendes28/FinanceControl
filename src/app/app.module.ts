import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { ListComponent } from './list/list.component';
/*
    HistoryComponent,
    ReportsComponent,
    */

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
