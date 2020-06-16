import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seasons',
  styleUrls: ['./seasons.component.scss'],
  template: `
    <ul class="seasons" *ngIf="seasons.length">
      <li class="number-of-episodes"></li>
      <li class="season d-flex flex-row" *ngFor="let season of seasons">
        <app-poster [posterPath]="season.poster_path" size="w154"></app-poster>
        <div class="season-info">
          <div class="name title">{{ season.name }}</div>
          <div class="episode-count">Episodes: {{ season.episode_count }}</div>
          <app-overview [overview]="season.overview" [maxLength]="250"></app-overview>
        </div>
      </li>
    </ul>
  `
})
export class SeasonsComponent implements OnInit {
  @Input() seasons: any;

  constructor() {}

  ngOnInit(): void {}
}
