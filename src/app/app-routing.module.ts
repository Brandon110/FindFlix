import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movies'
  },
  {
    path: 'movies',
    loadChildren: () => import('./components/movies/movies.module').then((m) => m.MoviesModule)
  },
  {
    path: 'movie',
    loadChildren: () => import('./components/movie-single/movie.module').then((m) => m.MovieModule)
  },
  {
    path: 'shows',
    loadChildren: () => import('./components/tv/tv.module').then((m) => m.TvModule)
  },
  {
    path: 'tv',
    loadChildren: () => import('./components/tv-single/tv-single.module').then((m) => m.TvSingleModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./components/search-results/search-results.module').then((m) => m.SearchResultsModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
