import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meta',
  styleUrls: ['./meta.component.scss'],
  template: `
    <div class="meta">
      <ng-content [singleItem]="singleItem"></ng-content>
    </div>
  `
})
export class MetaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
