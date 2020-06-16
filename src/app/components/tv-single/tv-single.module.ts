import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvSingleRoutingModule } from './tv-single-routing.module';
import { GoBackModule } from '../go-back/go-back.module';
import { VideosModule } from '../videos/videos.module';

import { TvSingleComponent } from './tv-single.component';
import { TvVideosComponent } from './tv-videos.component';
import { SingleModule } from '../single/single.module';

@NgModule({
  declarations: [TvSingleComponent, TvVideosComponent],
  exports: [TvSingleComponent, TvVideosComponent],
  imports: [CommonModule, GoBackModule, VideosModule, TvSingleRoutingModule, SingleModule]
})
export class TvSingleModule {}
