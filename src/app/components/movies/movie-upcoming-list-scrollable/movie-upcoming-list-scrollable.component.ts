import { Component, OnInit } from '@angular/core';
import { MdbApiService, NotificationsService } from '@app/core';
import { MovieUpcoming } from '@app/shared/models/movies';

@Component({
  selector: 'app-movie-upcoming-list-scrollable',
  styleUrls: ['./movie-upcoming-list-scrollable.component.scss'],
  template: `
    <app-item-list-scrollable mediaType="movie" [data]="movieUpcoming" title="Upcoming" itemListUrl="/movies/upcoming">
    </app-item-list-scrollable>
  `
})
export class MovieUpcomingListScrollableComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  movieUpcoming: MovieUpcoming;

  constructor(private mdbApiService: MdbApiService, private notificationService: NotificationsService) {}

  ngOnInit(): void {
    this.mdbApiService.movieUpcoming().subscribe(
      (data: MovieUpcoming) => (this.movieUpcoming = data),
      (error) => this.notificationService.sendError(error, this.notificationOptions)
    );
  }
}
