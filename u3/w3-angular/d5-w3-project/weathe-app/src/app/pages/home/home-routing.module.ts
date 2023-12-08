import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AuthGuard } from '../../pages/auth/auth.guard';


const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
{ path: 'favorite', component: FavoriteComponent,canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
