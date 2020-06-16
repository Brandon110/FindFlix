import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavMenusService } from '@app/core/services/nav-menus.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit, OnDestroy {
  constructor(private navMenusService: NavMenusService) {}

  ngOnInit(): void {
    this.navMenusService.showNavMenu();
  }

  ngOnDestroy(): void {
    this.navMenusService.hideNavMenu();
  }
}
