import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-form',
  styleUrls: ['./mobile-form.component.scss'],
  template: `
    <div class="mobile-form">
      <div class="search-wrap">
        <input
          *ngIf="mobileFormState"
          class="search"
          type="text"
          placeholder="Search"
          [(ngModel)]="value"
          (change)="onChange()"
          name="query"
        />
        <button *ngIf="!mobileFormState" (click)="openMobileForm()" class="toggle-search-form-btn"><i class="las la-search"></i></button>
        <button *ngIf="mobileFormState" (click)="closeMobileForm()" class="toggle-search-form-btn"><i class="las la-times"></i></button>
      </div>
    </div>
  `
})
export class MobileFormComponent implements OnInit {
  mobileFormState: boolean;

  @Input() value;
  @Input() router;

  constructor() {}

  ngOnInit(): void {}

  onChange(): void {
    if (this.value) {
      this.router.navigateByUrl(`/search?query=${this.value}`);
    }
  }

  openMobileForm(): void {
    this.mobileFormState = true;
  }

  closeMobileForm(): void {
    this.mobileFormState = false;
  }
}
