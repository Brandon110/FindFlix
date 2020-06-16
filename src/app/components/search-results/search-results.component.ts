import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  styleUrls: ['./search-results.component.scss'],
  template: `
    <app-go-back></app-go-back>

    <div class="filter-btns">
      <button [class.active]="filter === 'movies'" class="filter-btn" (click)="changeFilter('movies')">Movies</button>
      <button [class.active]="filter === 'tv'" class="filter-btn" (click)="changeFilter('tv')">Shows</button>
    </div>

    <div *ngIf="filter === 'movies'; then movies; else tv"></div>

    <ng-template #movies>
      <app-search-movies></app-search-movies>
    </ng-template>

    <ng-template #tv>
      <app-search-tv></app-search-tv>
    </ng-template>
  `
})
export class SearchResultsComponent implements OnInit {
  filter = 'movies';

  constructor() {}

  ngOnInit(): void {}

  changeFilter(filter: string): void {
    this.filter = filter;
  }
}
