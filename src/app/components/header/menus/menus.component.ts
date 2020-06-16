import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavMenusService } from '@app/core/services/nav-menus.service';
import { NavMenusState } from '@app/shared/models/NavMenusState';

@Component({
  selector: 'app-menus',
  styleUrls: ['./menus.component.scss'],
  template: `
    <div class="menus" *ngIf="navMenuState">
      <app-primary-menu></app-primary-menu>
      <app-mobile-menu></app-mobile-menu>
    </div>
  `
})
export class MenusComponent implements OnInit, OnDestroy {
  private navMenusSubscription: Subscription;

  navMenuState: boolean;
  currentUrl: string;

  constructor(private navMenusService: NavMenusService) {}

  ngOnInit(): void {
    this.navMenusSubscription = this.navMenusService.navMenusInit().subscribe((state: NavMenusState) => this.setNavState(state));
  }

  setNavState(state): void {
    this.navMenuState = state.show;
  }

  ngOnDestroy(): void {
    this.navMenusSubscription.unsubscribe();
  }
}
