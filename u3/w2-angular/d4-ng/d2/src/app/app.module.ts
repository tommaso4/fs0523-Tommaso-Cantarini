import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DisponibiliComponent } from './components/pages/disponibili/disponibili.component';
import { NonDisponibiliComponent } from './components/pages/non-disponibili/non-disponibili.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AsideComponent } from './components/aside/aside.component';
import { FormsModule } from '@angular/forms';
import { DettaglioComponent } from './components/pages/dettaglio/dettaglio.component';
import { BtnDispComponent } from './components/buttons/btn-disp/btn-disp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DisponibiliComponent,
    NonDisponibiliComponent,
    HomeComponent,
    AsideComponent,
    DettaglioComponent,
    BtnDispComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
