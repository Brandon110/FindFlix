import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mobile-menu',
  styleUrls: ['./mobile-menu.component.scss'],
  template: `
    <div class="mobile-menu">
      <select class="menu" [(ngModel)]="selectedOption" (change)="navigateUrl()">
        <option class="menu-item" *ngFor="let option of options" [ngValue]="option.value">
          {{ option.name }}
        </option>
      </select>
    </div>
  `
})
export class MobileMenuComponent implements OnInit, OnDestroy {
  private routeSubscription: Subscription;

  selectedOption: string;

  options = [
    { value: '/movies', name: 'Movies' },
    { value: '/shows', name: 'Tv Shows' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.selectedOption = this.router.url;

    this.routeSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selectedOption = this.router.url;
      }
    });
  }

  navigateUrl(): void {
    this.router.navigateByUrl(this.selectedOption);
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
