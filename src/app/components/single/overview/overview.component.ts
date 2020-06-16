import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overview',
  styleUrls: ['./overview.component.scss'],
  template: `
    <div class="overview" *ngIf="overview">
      {{ isOverMaxLength && !showFull ? (overview | slice: 0:maxLength) + '..' : overview }}
      <button class="toggle-show-full-btn" (click)="toggleShowFull()" *ngIf="isOverMaxLength">
        {{ showFull ? 'Read less' : 'Read more' }}
      </button>
    </div>
  `
})
export class OverviewComponent implements OnInit {
  @Input() overview: string;
  @Input() maxLength: number;

  isOverMaxLength: boolean;
  showFull: boolean;

  constructor() {}

  ngOnInit(): void {
    this.isOverMaxLength = this.overview.length > this.maxLength;
  }

  public toggleShowFull() {
    this.showFull = this.showFull ? false : true;
  }
}
