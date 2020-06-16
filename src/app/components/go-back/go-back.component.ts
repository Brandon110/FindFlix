import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-go-back',
  styleUrls: ['./go-back.component.scss'],
  template: `
    <button (click)="goBack()" class="go-back-btn"><i class="las la-chevron-left"></i></button>
  `
})
export class GoBackComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}

  goBack() {
    this.location.back();
  }
}
