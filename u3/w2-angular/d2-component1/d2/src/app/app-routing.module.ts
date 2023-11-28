import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisponibiliComponent } from './components/pages/disponibili/disponibili.component';
import { NonDisponibiliComponent } from './components/pages/non-disponibili/non-disponibili.component';
import { HomeComponent } from './components/pages/home/home.component';

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
    title: 'Non disponibili'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
