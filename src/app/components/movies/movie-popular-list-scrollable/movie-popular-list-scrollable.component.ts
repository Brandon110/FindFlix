import { Component, OnInit } from '@angular/core';
import { MdbApiService, NotificationsService } from '@app/core';
import { MoviePopular } from '@app/shared/models/movies';

@Component({
  selector: 'app-movie-popular-list-scrollable',
  styleUrls: ['./movie-popular-list-scrollable.component.scss'],
  template: `
    <app-item-list-scrollable mediaType="movie" [data]="moviePopular" title="Most Popular" itemListUrl="/movies/popular">
    </app-item-list-scrollable>
  `
})
export class MoviePopularListScrollableComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  moviePopular: MoviePopular;

  constructor(private mdbApiService: MdbApiService, private notificationService: NotificationsService) {}

  ngOnInit(): void {
    this.mdbApiService.moviePopular().subscribe(
      (data: MoviePopular) => (this.moviePopular = data),
      (error) => this.notificationService.sendError(error, this.notificationOptions)
    );
  }
}
