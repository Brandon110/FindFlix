import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-background-image',
  styleUrls: ['./background-image.component.scss'],
  template: `
    <div *ngIf="backgroundImage" class="background-img">
      <app-poster [posterPath]="backgroundImage" size="w780"></app-poster>
    </div>
  `
})
export class BackgroundImageComponent implements OnInit {
  @Input() backgroundImage: string;

  constructor() {}

  ngOnInit(): void {}
}
