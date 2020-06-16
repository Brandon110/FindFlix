import { Component, OnInit } from '@angular/core';
import { MdbApiService, NotificationsService, DataSharingService } from '@app/core';
import { TvTopRated } from '@app/shared/models/tv';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tv-top-rated',
  styleUrls: ['./tv-top-rated.component.scss'],
  template: `
    <app-item-list title="Top Rated Shows" [data]="tvTopRated" mediaType="tv"></app-item-list>
  `
})
export class TvTopRatedComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  tvTopRated: TvTopRated;

  constructor(
    private mdbApiService: MdbApiService,
    private notificationService: NotificationsService,
    private dataSharingService: DataSharingService
  ) {}

  ngOnInit(): void {
    this.dataSharingService.itemPage
      .pipe(
        switchMap((page) => {
          return this.mdbApiService.tvTopRated(page);
        })
      )
      .subscribe(
        (data) => {
          if (this.tvTopRated) {
            this.tvTopRated.results = this.tvTopRated.results.concat(data.results);
          } else {
            this.tvTopRated = data;
          }
        },
        (error) => this.notificationService.sendError(error, this.notificationOptions)
      );
  }
}
