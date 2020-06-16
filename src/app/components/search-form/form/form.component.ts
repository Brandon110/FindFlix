import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  styleUrls: ['./form.component.scss'],
  template: `
    <form (ngSubmit)="onSubmit()" class="search-form">
      <div class="search-wrap">
        <input class="search" type="text" placeholder="Search" [(ngModel)]="value" name="query" />
        <button class="submit-btn" type="submit"><i class="las la-search"></i></button>
      </div>
    </form>
  `
})
export class FormComponent implements OnInit {
  @Input() value: string;
  @Input() router;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.value) {
      this.router.navigateByUrl(`/search?query=${this.value}`);
    }
  }
}
