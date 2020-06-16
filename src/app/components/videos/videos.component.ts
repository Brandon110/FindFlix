import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-videos',
  styleUrls: ['./videos.component.scss'],
  template: `
    <div class="videos">
      <app-go-back></app-go-back>
      <ul class="videos-list d-flex flex-row" *ngIf="videos.length">
        <li class="video" *ngFor="let video of videos">
          <app-media-player [video]="video"></app-media-player>
        </li>
      </ul>
    </div>
  `
})
export class VideosComponent implements OnInit {
  @Input() videos: any[];

  constructor() {}

  ngOnInit(): void {}
}
