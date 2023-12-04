import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisponibiliComponent } from './components/pages/disponibili/disponibili.component';
import { NonDisponibiliComponent } from './components/pages/non-disponibili/non-disponibili.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DettaglioComponent } from './components/pages/dettaglio/dettaglio.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'non-disponibili',
    component: NonDisponibiliComponent,
    title: 'Non disponibili'
  },
  {
    path: 'disponibili',
    component: DisponibiliComponent,
    title: 'Disponibili'
  },
  {
    path: 'dettaglio/:id',
    component: DettaglioComponent,
    title: 'Dettaglio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
