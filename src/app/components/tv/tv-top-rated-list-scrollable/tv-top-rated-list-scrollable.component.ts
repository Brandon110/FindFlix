import { Component, OnInit } from '@angular/core';
import { MdbApiService, NotificationsService } from '@app/core';
import { TvTopRated } from '@app/shared/models/tv';

@Component({
  selector: 'app-tv-top-rated-list-scrollable',
  styleUrls: ['./tv-top-rated-list-scrollable.component.scss'],
  template: `
    <app-item-list-scrollable mediaType="tv" [data]="tvTopRated" title="Top Rated" itemListUrl="/shows/top-rated">
    </app-item-list-scrollable>
  `
})
export class TvTopRatedListScrollableComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  tvTopRated: TvTopRated;

  constructor(private mdbApiService: MdbApiService, private notificationService: NotificationsService) {}

  ngOnInit(): void {
    this.mdbApiService.tvTopRated().subscribe(
      (data: TvTopRated) => (this.tvTopRated = data),
      (error) => this.notificationService.sendError(error, this.notificationOptions)
    );
  }
}
