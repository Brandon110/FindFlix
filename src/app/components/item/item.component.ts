import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  styleUrls: ['./item.component.scss'],
  template: `
    <div class="item">
      <app-poster [posterPath]="item.poster_path" [size]="size"></app-poster>
      <div class="links d-flex">
        <a routerLink="/{{ mediaType }}/{{ item.id }}">Details</a>
        <a routerLink="/{{ mediaType }}/{{ item.id }}/videos">Play</a>
      </div>
    </div>
  `
})
export class ItemComponent implements OnInit {
  @Input() item: any;
  @Input() mediaType: string;
  @Input() size: string;

  constructor() {}

  ngOnInit(): void {}
}
