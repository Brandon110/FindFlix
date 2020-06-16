import { Component, OnInit } from '@angular/core';
import { MdbApiService, NotificationsService } from '@app/core';
import { ActivatedRoute } from '@angular/router';
import { MovieSearch } from '@app/shared/models/movies';

@Component({
  selector: 'app-search-movies',
  styleUrls: ['./search-movies.component.scss'],
  template: `
    <app-search-items [searchData]="movieSearch" mediaType="movie"></app-search-items>
  `
})
export class SearchMoviesComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  movieSearch: MovieSearch;

  constructor(private mdbApiService: MdbApiService, private route: ActivatedRoute, private notificationService: NotificationsService) {}

  ngOnInit(): void {
    const query = this.route.snapshot.queryParams['query'];

    this.mdbApiService.searchMovie(query).subscribe(
      (data: MovieSearch) => (this.movieSearch = data),
      (error) => this.notificationService.sendError(error, this.notificationOptions)
    );
  }
}
