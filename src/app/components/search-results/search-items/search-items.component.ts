import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-items',
  styleUrls: ['./search-items.component.scss'],
  template: `
    <ul class="search-items d-flex flex-row" *ngIf="searchData">
      <li class="search-item" *ngFor="let searchItem of searchData.results">
        <app-item [item]="searchItem" [mediaType]="mediaType" size="w500"></app-item>
      </li>
    </ul>
  `
})
export class SearchItemsComponent implements OnInit {
  @Input() searchData: any;
  @Input() mediaType: string;

  constructor() {}

  ngOnInit(): void {}
}
