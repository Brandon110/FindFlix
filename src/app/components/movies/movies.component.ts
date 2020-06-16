import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavMenusService } from '@app/core/services/nav-menus.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  constructor(private navMenusService: NavMenusService) {}

  ngOnInit(): void {
    this.navMenusService.showNavMenu();
  }

  ngOnDestroy(): void {
    this.navMenusService.hideNavMenu();
  }
}
