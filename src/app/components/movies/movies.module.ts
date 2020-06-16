import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GoBackModule } from '@app/components/go-back/go-back.module';
import { MediaPlayerModule } from '@app/components/media-player/media-player.module';
import { VideosModule } from '../videos/videos.module';
import { ItemListModule } from '../item-list/item-list.module';
import { ItemListScrollableModule } from '../item-list-scrollable/item-list-scrollable.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { SingleModule } from '../single/single.module';

import { MoviesComponent } from './movies.component';
import { MovieDiscoverComponent } from './movie-discover/movie-discover.component';
import { MoviePopularListScrollableComponent } from './movie-popular-list-scrollable/movie-popular-list-scrollable.component';
import { MovieNowPlayingListScrollableComponent } from './movie-now-playing-list-scrollable/movie-now-playing-list-scrollable.component';
import { MovieTopRatedListScrollableComponent } from './movie-top-rated-list-scrollable/movie-top-rated-list-scrollable.component';
import { MovieUpcomingListScrollableComponent } from './movie-upcoming-list-scrollable/movie-upcoming-list-scrollable.component';
import { MoviePopularComponent } from './movie-popular.component';
import { MovieNowPlayingComponent } from './movie-now-playing.component';
import { MovieTopRatedComponent } from './movie-top-rated.component';
import { MovieUpcomingComponent } from './movie-upcoming.component';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieDiscoverComponent,
    MoviePopularListScrollableComponent,
    MovieNowPlayingListScrollableComponent,
    MovieTopRatedListScrollableComponent,
    MovieUpcomingListScrollableComponent,
    MoviePopularComponent,
    MovieNowPlayingComponent,
    MovieTopRatedComponent,
    MovieUpcomingComponent
  ],
  exports: [MoviesComponent],
  imports: [
    CommonModule,
    RouterModule,
    ItemListScrollableModule,
    ItemListModule,
    GoBackModule,
    MediaPlayerModule,
    VideosModule,
    MoviesRoutingModule,
    SingleModule
  ]
})
export class MoviesModule {}
