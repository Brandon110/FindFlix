import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  styleUrls: ['./details.component.scss'],
  template: `
    <div class="item-details">
      <ng-content></ng-content>
    </div>
  `
})
export class DetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
