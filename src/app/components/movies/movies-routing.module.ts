import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies.component';
import { MoviePopularComponent } from './movie-popular.component';
import { MovieNowPlayingComponent } from './movie-now-playing.component';
import { MovieTopRatedComponent } from './movie-top-rated.component';
import { MovieUpcomingComponent } from './movie-upcoming.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'popular', component: MoviePopularComponent },
  { path: 'now-playing', component: MovieNowPlayingComponent },
  { path: 'top-rated', component: MovieTopRatedComponent },
  { path: 'upcoming', component: MovieUpcomingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
