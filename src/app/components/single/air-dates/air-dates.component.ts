import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-air-dates',
  styleUrls: ['./air-dates.component.scss'],
  template: `
    <div *ngIf="firstAirDate" class="first-air-date">{{ firstAirDate | date: 'yyyy' }}</div>
    <span>-</span>
    <div *ngIf="lastAirDate" class="last-air-date">{{ lastAirDate | date: 'yyyy' }}</div>
  `
})
export class AirDatesComponent implements OnInit {
  @Input() firstAirDate: string;
  @Input() lastAirDate: string;

  constructor() {}

  ngOnInit(): void {}
}
