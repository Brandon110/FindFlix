import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosComponent } from './videos.component';
import { MediaPlayerModule } from '../media-player/media-player.module';
import { GoBackModule } from '../go-back/go-back.module';

@NgModule({
  declarations: [VideosComponent],
  exports: [VideosComponent],
  imports: [CommonModule, MediaPlayerModule, GoBackModule]
})
export class VideosModule {}
