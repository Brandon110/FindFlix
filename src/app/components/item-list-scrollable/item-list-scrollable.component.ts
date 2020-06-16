import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-list-scrollable',
  styleUrls: ['./item-list-scrollable.component.scss'],
  template: `
    <div class="item-list-scrollable" *ngIf="data?.results; let items">
      <div class="title">
        <a [routerLink]="itemListUrl">{{ title }} <i class="las la-chevron-right icon"></i></a>
      </div>
      <div class="items-list-wrapper">
        <ul class="items-list d-flex flex-row" appScrollable #list="appScrollable" [scrollUnit]="2">
          <li *ngFor="let item of items" class="item">
            <app-item [item]="item" [mediaType]="mediaType" size="w185"></app-item>
          </li>
        </ul>
        <button
          *ngIf="list.isOverflow"
          [class.disabled]="!list.canScrollFirst"
          (mouseover)="list.scroll(-1)"
          (mouseout)="list.stopScroll()"
          class="scroll-btn scroll-left"
        >
          <i class="las la-chevron-left"></i>
        </button>
        <button
          *ngIf="list.isOverflow"
          [class.disabled]="!list.canScrollEnd"
          (mouseover)="list.scroll(1)"
          (mouseout)="list.stopScroll()"
          class="scroll-btn scroll-right"
        >
          <i class="las la-chevron-right"></i>
        </button>
      </div>
    </div>
  `
})
export class ItemListScrollableComponent implements OnInit {
  @Input() title = '';
  @Input() itemListUrl: string;
  @Input() mediaType: string;
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}
}
