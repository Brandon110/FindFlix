import { Component, OnInit } from '@angular/core';
import { MdbApiService, NotificationsService } from '@app/core';
import { MovieNowPlaying } from '@app/shared/models/movies';

@Component({
  selector: 'app-movie-now-playing-list-scrollable',
  styleUrls: ['./movie-now-playing-list-scrollable.component.scss'],
  template: `
    <app-item-list-scrollable mediaType="movie" [data]="movieNowPlaying" title="Now Playing" itemListUrl="/movies/now-playing">
    </app-item-list-scrollable>
  `
})
export class MovieNowPlayingListScrollableComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  movieNowPlaying: MovieNowPlaying;

  constructor(private mdbApiService: MdbApiService, private notificationService: NotificationsService) {}

  ngOnInit(): void {
    this.mdbApiService.movieNowPlaying().subscribe(
      (data) => (this.movieNowPlaying = data),
      (error) => this.notificationService.sendError(error, this.notificationOptions)
    );
  }
}
