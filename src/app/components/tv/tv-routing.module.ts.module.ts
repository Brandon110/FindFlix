import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvComponent } from './tv.component';
import { TvAiringTodayComponent } from './tv-airing-today.component';
import { TvOnTheAirComponent } from './tv-on-the-air.component';
import { TvPopularComponent } from './tv-popular.component';
import { TvTopRatedComponent } from './tv-top-rated.component';

const routes: Routes = [
  { path: '', component: TvComponent },
  { path: 'airing-today', component: TvAiringTodayComponent },
  { path: 'on-the-air', component: TvOnTheAirComponent },
  { path: 'popular', component: TvPopularComponent },
  { path: 'top-rated', component: TvTopRatedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvRoutingModule {}
