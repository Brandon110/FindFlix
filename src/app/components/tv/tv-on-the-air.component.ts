import { Component, OnInit } from '@angular/core';
import { MdbApiService, NotificationsService, DataSharingService } from '@app/core';
import { TvOnTheAir } from '@app/shared/models/tv';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tv-on-the-air',
  styleUrls: ['./tv-on-the-air.component.scss'],
  template: `
    <app-item-list title="On The Air" [data]="tvOnTheAir" mediaType="tv"></app-item-list>
  `
})
export class TvOnTheAirComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  tvOnTheAir: TvOnTheAir;

  constructor(
    private mdbApiService: MdbApiService,
    private notificationService: NotificationsService,
    private dataSharingService: DataSharingService
  ) {}

  ngOnInit(): void {
    this.dataSharingService.itemPage
      .pipe(
        switchMap((page) => {
          return this.mdbApiService.tvOnTheAir(page);
        })
      )
      .subscribe(
        (data) => {
          if (this.tvOnTheAir) {
            this.tvOnTheAir.results = this.tvOnTheAir.results.concat(data.results);
          } else {
            this.tvOnTheAir = data;
          }
        },
        (error) => this.notificationService.sendError(error, this.notificationOptions)
      );
  }
}
