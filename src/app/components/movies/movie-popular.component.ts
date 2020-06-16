import { Component, OnInit } from '@angular/core';
import { MdbApiService, NotificationsService, DataSharingService } from '@app/core';
import { MoviePopular } from '@app/shared/models/movies';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-popular',
  styleUrls: ['./movie-popular.component.scss'],
  template: `
    <app-item-list title="Most Popular" [data]="moviePopular" mediaType="movie"></app-item-list>
  `
})
export class MoviePopularComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  moviePopular: MoviePopular;

  constructor(
    private mdbApiService: MdbApiService,
    private notificationService: NotificationsService,
    private dataSharingService: DataSharingService
  ) {}

  ngOnInit(): void {
    this.dataSharingService.itemPage
      .pipe(
        switchMap((page) => {
          return this.mdbApiService.moviePopular(page);
        })
      )
      .subscribe(
        (data) => {
          if (this.moviePopular) {
            this.moviePopular.results = this.moviePopular.results.concat(data.results);
          } else {
            this.moviePopular = data;
          }
        },
        (error) => this.notificationService.sendError(error, this.notificationOptions)
      );
  }
}
