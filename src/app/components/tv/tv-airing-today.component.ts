import { Component, OnInit } from '@angular/core';
import { MdbApiService, NotificationsService, DataSharingService } from '@app/core';
import { TvAiringToday } from '@app/shared/models/tv';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tv-airing-today',
  styleUrls: ['./tv-airing-today.component.scss'],
  template: `
    <app-item-list title="Airing Today" [data]="tvAiringToday" mediaType="tv"></app-item-list>
  `
})
export class TvAiringTodayComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  tvAiringToday: TvAiringToday;

  constructor(
    private mdbApiService: MdbApiService,
    private notificationService: NotificationsService,
    private dataSharingService: DataSharingService
  ) {}

  ngOnInit(): void {
    this.dataSharingService.itemPage
      .pipe(
        switchMap((page) => {
          return this.mdbApiService.tvAiringToday(page);
        })
      )
      .subscribe(
        (data) => {
          if (this.tvAiringToday) {
            this.tvAiringToday.results = this.tvAiringToday.results.concat(data.results);
          } else {
            this.tvAiringToday = data;
          }
        },
        (error) => this.notificationService.sendError(error, this.notificationOptions)
      );
  }
}
