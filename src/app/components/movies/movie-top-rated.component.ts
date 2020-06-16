import { Component, OnInit } from '@angular/core';
import { MdbApiService, NotificationsService, DataSharingService } from '@app/core';
import { MovieTopRated } from '@app/shared/models/movies';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-top-rated',
  styleUrls: ['./movie-top-rated.component.scss'],
  template: `
    <app-item-list title="Top Rated" [data]="movieTopRated" mediaType="movie"></app-item-list>
  `
})
export class MovieTopRatedComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  movieTopRated: MovieTopRated;

  constructor(
    private mdbApiService: MdbApiService,
    private notificationService: NotificationsService,
    private dataSharingService: DataSharingService
  ) {}

  ngOnInit(): void {
    this.dataSharingService.itemPage
      .pipe(
        switchMap((page) => {
          return this.mdbApiService.movieTopRated(page);
        })
      )
      .subscribe(
        (data) => {
          if (this.movieTopRated) {
            this.movieTopRated.results = this.movieTopRated.results.concat(data.results);
          } else {
            this.movieTopRated = data;
          }
        },
        (error) => this.notificationService.sendError(error, this.notificationOptions)
      );
  }
}
