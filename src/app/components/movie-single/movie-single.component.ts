import { Component, OnInit } from '@angular/core';
import { MdbApiService, NotificationsService } from '@app/core';
import { ActivatedRoute } from '@angular/router';
import { MovieInfo } from '@app/shared/models/movies';

@Component({
  selector: 'app-movie',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.scss']
})
export class MovieSingleComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  movieInfo: MovieInfo;

  constructor(private route: ActivatedRoute, private mdbApiService: MdbApiService, private notificationService: NotificationsService) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.params['id'];

    this.mdbApiService.movieInfo(movieId).subscribe(
      (data: MovieInfo) => (this.movieInfo = data),
      (error) => this.notificationService.sendError(error, this.notificationOptions)
    );
  }
}
