import { Component, OnInit, OnDestroy, Input, HostListener } from '@angular/core';
import { DataSharingService, LoadingService } from '@app/core';
import { LoadingState } from '@app/shared/models/LoadingState';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-list',
  styleUrls: ['./item-list.component.scss'],
  template: `
    <app-go-back></app-go-back>
    <div *ngIf="data" class="item-list-wrapper">
      <div class="title">{{ title }}</div>
      <ul class="item-list d-flex flex-row">
        <li *ngFor="let item of data.results" class="item">
          <app-item [item]="item" [mediaType]="mediaType" size="w342"></app-item>
        </li>
      </ul>
    </div>
  `
})
export class ItemListComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() data: any;
  @Input() mediaType: string;

  loadingSubscription: Subscription;
  loadingState = false;

  constructor(private dataSharingService: DataSharingService, private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingSubscription = this.loadingService.loadingInit().subscribe((state: LoadingState) => (this.loadingState = state.show));
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (this.data && this.data.page < this.data.total_pages && !this.loadingState) {
        this.data.page += 1;
        this.dataSharingService.itemPage.next(this.data.page);
      }
    }
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}
