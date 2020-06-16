import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  styleUrls: ['./link.component.scss'],
  template: `
    <a *ngIf="url" class="show-videos-link" [routerLink]="url"> <i class="las la-play icon"></i> <span>Trailers</span> </a>
  `
})
export class LinkComponent implements OnInit {
  @Input() url: string;

  constructor() {}

  ngOnInit(): void {}
}
