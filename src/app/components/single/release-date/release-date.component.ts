import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-release-date',
  styleUrls: ['./release-date.component.scss'],
  template: `
    <div *ngIf="releaseDate" class="release-date">{{ releaseDate | date: 'yyyy' }}</div>
  `
})
export class ReleaseDateComponent implements OnInit {
  @Input() releaseDate: string;

  constructor() {}

  ngOnInit(): void {}
}
