import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-player',
  styleUrls: ['./media-player.component.scss'],
  template: `
    <iframe
      *ngIf="videoUrl"
      class="video-player"
      [src]="videoUrl | safeurl"
      allowfullscreen="allowfullscreen"
      mozallowfullscreen="mozallowfullscreen"
      msallowfullscreen="msallowfullscreen"
      oallowfullscreen="oallowfullscreen"
      webkitallowfullscreen="webkitallowfullscreen"
      frameBorder="0"
    ></iframe>
  `
})
export class MediaPlayerComponent implements OnInit {
  @Input() video: any;
  private sites = {
    YouTube: 'https://www.youtube.com/embed/',
    Vimeo: 'https://vimeo.com/'
  };
  videoUrl: string;

  constructor() {}

  ngOnInit(): void {
    if (this.video) {
      const { site, key } = this.video;

      this.videoUrl = `${this.sites[site]}${key}`;
    }
  }
}
