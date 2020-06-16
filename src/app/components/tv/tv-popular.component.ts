import { Component, OnInit } from '@angular/core';
import { MdbApiService, NotificationsService, DataSharingService } from '@app/core';
import { TvPopular } from '@app/shared/models/tv';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tv-popular',
  styleUrls: ['./tv-popular.component.scss'],
  template: `
    <app-item-list title="Popular Shows" [data]="tvPopular" mediaType="tv"></app-item-list>
  `
})
export class TvPopularComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  tvPopular: TvPopular;

  constructor(
    private mdbApiService: MdbApiService,
    private notificationService: NotificationsService,
    private dataSharingService: DataSharingService
  ) {}

  ngOnInit(): void {
    this.dataSharingService.itemPage
      .pipe(
        switchMap((page) => {
          return this.mdbApiService.tvPopular(page);
        })
      )
      .subscribe(
        (data) => {
          if (this.tvPopular) {
            this.tvPopular.results = this.tvPopular.results.concat(data.results);
          } else {
            this.tvPopular = data;
          }
        },
        (error) => this.notificationService.sendError(error, this.notificationOptions)
      );
  }
}
