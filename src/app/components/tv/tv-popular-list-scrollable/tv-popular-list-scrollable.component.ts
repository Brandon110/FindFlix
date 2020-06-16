import { Component, OnInit } from '@angular/core';
import { MdbApiService, NotificationsService } from '@app/core';
import { TvPopular } from '@app/shared/models/tv';

@Component({
  selector: 'app-tv-popular-list-scrollable',
  styleUrls: ['./tv-popular-list-scrollable.component.scss'],
  template: `
    <app-item-list-scrollable mediaType="tv" [data]="tvPopular" title="Popular Shows" itemListUrl="/shows/popular">
    </app-item-list-scrollable>
  `
})
export class TvPopularListScrollableComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  tvPopular: TvPopular;

  constructor(private mdbApiService: MdbApiService, private notificationService: NotificationsService) {}

  ngOnInit(): void {
    this.mdbApiService.tvPopular().subscribe(
      (data: TvPopular) => (this.tvPopular = data),
      (error) => this.notificationService.sendError(error, this.notificationOptions)
    );
  }
}
