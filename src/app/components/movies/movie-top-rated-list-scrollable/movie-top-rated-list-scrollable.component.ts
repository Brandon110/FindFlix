import { Component, OnInit } from '@angular/core';
import { MdbApiService, NotificationsService } from '@app/core';
import { MovieTopRated } from '@app/shared/models/movies';

@Component({
  selector: 'app-movie-top-rated-list-scrollable',
  styleUrls: ['./movie-top-rated-list-scrollable.component.scss'],
  template: `
    <app-item-list-scrollable mediaType="movie" [data]="movieTopRated" title="Top Rated" itemListUrl="/movies/top-rated">
    </app-item-list-scrollable>
  `
})
export class MovieTopRatedListScrollableComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  movieTopRated: MovieTopRated;

  constructor(private mdbApiService: MdbApiService, private notificationService: NotificationsService) {}

  ngOnInit(): void {
    this.mdbApiService.movieTopRated().subscribe(
      (data: MovieTopRated) => (this.movieTopRated = data),
      (error) => this.notificationService.sendError(error, this.notificationOptions)
    );
  }
}
