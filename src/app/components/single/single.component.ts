import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single',
  styleUrls: ['./single.component.scss'],
  template: `
    <div class="single">
      <ng-content></ng-content>
    </div>
  `
})
export class SingleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
