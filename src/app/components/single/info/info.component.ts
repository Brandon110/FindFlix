import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  styleUrls: ['./info.component.scss'],
  template: `
    <div class="item d-flex flex-row info">
      <ng-content></ng-content>
    </div>
  `
})
export class InfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
