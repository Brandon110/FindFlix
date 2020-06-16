import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poster',
  styleUrls: ['./poster.component.scss'],
  template: `
    <img class="poster-img" [src]="posterPath ? baseUrl + imgSizes[size] + '/' + posterPath : placeholderImage" />
  `
})
export class PosterComponent implements OnInit {
  placeholderImage = '/images/placeholder-image.png';
  baseUrl = 'https://image.tmdb.org/t/p/';
  imgSizes = {
    w92: 'w92',
    w154: 'w154',
    w185: 'w185',
    w342: 'w342',
    w500: 'w500',
    w780: 'w780',
    original: 'original'
  };

  @Input() posterPath: string;
  @Input() size: string;

  constructor() {}

  ngOnInit(): void {}
}
