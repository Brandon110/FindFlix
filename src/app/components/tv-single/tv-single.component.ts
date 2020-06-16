import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdbApiService, NotificationsService } from '@app/core';
import { TvInfo } from '@app/shared/models/tv';

@Component({
  selector: 'app-tv-single',
  templateUrl: './tv-single.component.html',
  styleUrls: ['./tv-single.component.scss']
})
export class TvSingleComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  tvInfo: TvInfo;

  constructor(private route: ActivatedRoute, private mdbApiService: MdbApiService, private notificationService: NotificationsService) {}

  ngOnInit(): void {
    const showId = this.route.snapshot.params['id'];

    this.mdbApiService.tvInfo(showId).subscribe(
      (data: TvInfo) => (this.tvInfo = data),
      (error) => this.notificationService.sendError(error, this.notificationOptions)
    );
  }
}
