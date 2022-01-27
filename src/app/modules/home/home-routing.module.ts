import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'tracks',
    loadChildren: ()=>import('@mModules/tracks/tracks.module').then( m => m.TracksModule),
  },
  {
    path: 'favorites',
    loadChildren: ()=>import('@mModules/favorites/favorites.module').then( m => m.FavoritesModule),
  },
  {
    path: 'history',
    loadChildren: ()=>import('@mModules/history/history.module').then( m => m.HistoryModule),
  },
  {
    path:'**',
    redirectTo:'tracks'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
