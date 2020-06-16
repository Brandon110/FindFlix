import { Component, OnInit } from '@angular/core';
import { MdbApiService, NotificationsService } from '@app/core';
import { TvOnTheAir } from '@app/shared/models/tv';

@Component({
  selector: 'app-tv-on-the-air-list-scrollable',
  styleUrls: ['./tv-on-the-air-list-scrollable.component.scss'],
  template: `
    <app-item-list-scrollable mediaType="tv" [data]="tvOnTheAir" title="On the Air" itemListUrl="/shows/on-the-air">
    </app-item-list-scrollable>
  `
})
export class TvOnTheAirListScrollableComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  tvOnTheAir: TvOnTheAir;

  constructor(private mdbApiService: MdbApiService, private notificationService: NotificationsService) {}

  ngOnInit(): void {
    this.mdbApiService.tvOnTheAir().subscribe(
      (data: TvOnTheAir) => (this.tvOnTheAir = data),
      (error) => this.notificationService.sendError(error, this.notificationOptions)
    );
  }
}
