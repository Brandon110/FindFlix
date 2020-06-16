import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieSingleComponent } from './movie-single.component';
import { MovieVideosComponent } from './movie-videos.component';

const routes: Routes = [
  { path: ':id', component: MovieSingleComponent },
  { path: ':id/videos', component: MovieVideosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule {}
