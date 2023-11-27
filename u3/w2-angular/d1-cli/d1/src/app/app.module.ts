import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponetsComponent } from './componets/componets.component';
import { Header1Component } from './componets/header1/header1.component';
import { Header2Component } from './componets/header2/header2.component';
import { Header3Component } from './componets/header3/header3.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponetsComponent,
    Header1Component,
    Header2Component,
    Header3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
