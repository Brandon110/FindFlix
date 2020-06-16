import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-form',
  styleUrls: ['./search-form.component.scss'],
  template: `
    <app-form [router]="getRouter" [value]="value"></app-form>
    <app-mobile-form [router]="getRouter" [value]="value"></app-mobile-form>
  `
})
export class SearchFormComponent implements OnInit, OnDestroy {
  private routeSubscription: Subscription;

  value: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
      };

      this.routeSubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.value = '';
        }
      });

      this.value = this.route.snapshot.queryParams['query'];
    });
  }

  get getRouter() {
    return this.router;
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
