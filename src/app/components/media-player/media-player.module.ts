import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaPlayerComponent } from './media-player.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [MediaPlayerComponent],
  exports: [MediaPlayerComponent],
  imports: [CommonModule, SharedModule]
})
export class MediaPlayerModule {}
