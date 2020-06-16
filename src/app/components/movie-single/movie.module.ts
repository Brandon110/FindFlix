import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';

import { MovieSingleComponent } from './movie-single.component';
import { MovieVideosComponent } from './movie-videos.component';

import { VideosModule } from '../videos/videos.module';
import { GoBackModule } from '../go-back/go-back.module';
import { SingleModule } from '../single/single.module';

@NgModule({
  declarations: [MovieSingleComponent, MovieVideosComponent],
  exports: [MovieSingleComponent, MovieVideosComponent],
  imports: [CommonModule, VideosModule, GoBackModule, MovieRoutingModule, SingleModule]
})
export class MovieModule {}
