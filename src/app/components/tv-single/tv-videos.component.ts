import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdbApiService, NotificationsService } from '@app/core';
import { TvVideos } from '@app/shared/models/tv';

@Component({
  selector: 'app-tv-videos',
  templateUrl: './tv-videos.component.html',
  styleUrls: ['./tv-videos.component.scss']
})
export class TvVideosComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  tvVideos: TvVideos;

  constructor(private route: ActivatedRoute, private mdbApiService: MdbApiService, private notificationService: NotificationsService) {}

  ngOnInit(): void {
    const showId = this.route.snapshot.params['id'];

    this.mdbApiService.tvVideos(showId).subscribe(
      (data: TvVideos) => (this.tvVideos = data),
      (error) => this.notificationService.sendError(error, this.notificationOptions)
    );
  }
}
