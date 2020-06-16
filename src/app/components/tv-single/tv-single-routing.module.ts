import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TvSingleComponent } from './tv-single.component';
import { TvVideosComponent } from './tv-videos.component';

const routes: Routes = [
  { path: ':id', component: TvSingleComponent },
  { path: ':id/videos', component: TvVideosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvSingleRoutingModule {}
