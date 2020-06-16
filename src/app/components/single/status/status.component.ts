import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  styleUrls: ['./status.component.scss'],
  template: `
    <div *ngIf="status" class="status">{{ status }}</div>
  `
})
export class StatusComponent implements OnInit {
  @Input() status: string;

  constructor() {}

  ngOnInit(): void {}
}
