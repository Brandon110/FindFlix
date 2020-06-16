import { Component, OnInit } from '@angular/core';
import { MdbApiService, NotificationsService, DataSharingService } from '@app/core';
import { MovieNowPlaying, MovieResults } from '@app/shared/models/movies';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-now-playing',
  styleUrls: ['./movie-now-playing.component.scss'],
  template: `
    <app-item-list title="Now Playing" [data]="movieNowPlaying" mediaType="movie"></app-item-list>
  `
})
export class MovieNowPlayingComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  movieNowPlaying: MovieNowPlaying;

  constructor(
    private mdbApiService: MdbApiService,
    private notificationService: NotificationsService,
    private dataSharingService: DataSharingService
  ) {}

  ngOnInit(): void {
    this.dataSharingService.itemPage
      .pipe(
        switchMap((page) => {
          return this.mdbApiService.movieNowPlaying(page);
        })
      )
      .subscribe(
        (data) => {
          if (this.movieNowPlaying) {
            this.movieNowPlaying.results = this.movieNowPlaying.results.concat(data.results);
          } else {
            this.movieNowPlaying = data;
          }
        },
        (error) => this.notificationService.sendError(error, this.notificationOptions)
      );
  }
}
