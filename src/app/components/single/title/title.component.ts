import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  styleUrls: ['./title.component.scss'],
  template: `
    <div *ngIf="title" class="title">{{ title }}</div>
  `
})
export class TitleComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
