import { Component, OnInit } from '@angular/core';
import { MdbApiService, NotificationsService } from '@app/core';
import { MovieVideo } from '@app/shared/models/movies';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-videos',
  templateUrl: './movie-videos.component.html',
  styleUrls: ['./movie-videos.component.scss']
})
export class MovieVideosComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  movieVideo: MovieVideo;

  constructor(private route: ActivatedRoute, private mdbApiService: MdbApiService, private notificationService: NotificationsService) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.params['id'];

    this.mdbApiService.movieVideos(movieId).subscribe(
      (data: MovieVideo) => (this.movieVideo = data),
      (error) => this.notificationService.sendError(error, this.notificationOptions)
    );
  }
}
