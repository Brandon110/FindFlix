import { Component, OnInit } from '@angular/core';
import { MdbApiService, NotificationsService, DataSharingService } from '@app/core';
import { MovieUpcoming } from '@app/shared/models/movies';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-upcoming',
  styleUrls: ['./movie-upcoming.component.scss'],
  template: `
    <app-item-list title="Upcoming Movies" [data]="movieUpcoming" mediaType="movie"></app-item-list>
  `
})
export class MovieUpcomingComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  page = 1;
  movieUpcoming: MovieUpcoming;

  constructor(
    private mdbApiService: MdbApiService,
    private notificationService: NotificationsService,
    private dataSharingService: DataSharingService
  ) {}

  ngOnInit(): void {
    this.dataSharingService.itemPage
      .pipe(
        switchMap((page) => {
          return this.mdbApiService.movieUpcoming(page);
        })
      )
      .subscribe(
        (data) => {
          if (this.movieUpcoming) {
            this.movieUpcoming.results = this.movieUpcoming.results.concat(data.results);
          } else {
            this.movieUpcoming = data;
          }
        },
        (error) => this.notificationService.sendError(error, this.notificationOptions)
      );
  }
}
