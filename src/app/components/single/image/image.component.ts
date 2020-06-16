import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  styleUrls: ['./image.component.scss'],
  template: `
    <div class="img" *ngIf="image">
      <app-poster [posterPath]="image" size="w342"></app-poster>
    </div>
  `
})
export class ImageComponent implements OnInit {
  @Input() image: string;

  constructor() {}

  ngOnInit(): void {}
}
