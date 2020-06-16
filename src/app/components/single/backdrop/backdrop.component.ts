import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  styleUrls: ['./backdrop.component.scss'],
  template: `
    <img
      *ngIf="backdropPath"
      class="backdrop-img"
      [src]="backdropPath ? baseUrl + imgSizes[size] + '/' + backdropPath : placeholderImage"
    />
  `
})
export class BackdropComponent implements OnInit {
  placeholderImage = '/images/placeholder-image.png';
  baseUrl = 'https://image.tmdb.org/t/p/';
  imgSizes = {
    w300: 'w300',
    w780: 'w780',
    w1280: 'w1280',
    original: 'original'
  };

  @Input() backdropPath: string;
  @Input() size: string;

  constructor() {}

  ngOnInit(): void {}
}
