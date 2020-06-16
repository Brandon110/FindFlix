import { Component, OnInit } from '@angular/core';
import { MdbApiService, NotificationsService } from '@app/core';
import { TvAiringToday } from '@app/shared/models/tv';

@Component({
  selector: 'app-tv-airing-today-list-scrollable',
  styleUrls: ['./tv-airing-today-list-scrollable.component.scss'],
  template: `
    <app-item-list-scrollable mediaType="tv" [data]="tvAiringToday" title="Airing Today" itemListUrl="/shows/airing-today">
    </app-item-list-scrollable>
  `
})
export class TvAiringTodayListScrollableComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  tvAiringToday: TvAiringToday;

  constructor(private mdbApiService: MdbApiService, private notificationService: NotificationsService) {}

  ngOnInit(): void {
    this.mdbApiService.tvAiringToday().subscribe(
      (data: TvAiringToday) => (this.tvAiringToday = data),
      (error) => this.notificationService.sendError(error, this.notificationOptions)
    );
  }
}
