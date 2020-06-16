import { Component, OnInit } from '@angular/core';
import { TvSearch } from '@app/shared/models/tv';
import { MdbApiService, NotificationsService } from '@app/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-tv',
  styleUrls: ['./search-tv.component.scss'],
  template: `
    <app-search-items [searchData]="tvSearch" mediaType="tv"></app-search-items>
  `
})
export class SearchTvComponent implements OnInit {
  private notificationOptions = {
    persistOnNavigation: false
  };

  tvSearch: TvSearch;

  constructor(private mdbApiService: MdbApiService, private route: ActivatedRoute, private notificationService: NotificationsService) {}

  ngOnInit(): void {
    const query = this.route.snapshot.queryParams['query'];

    this.mdbApiService.searchTv(query).subscribe(
      (data: TvSearch) => (this.tvSearch = data),
      (error) => this.notificationService.sendError(error, this.notificationOptions)
    );
  }
}
