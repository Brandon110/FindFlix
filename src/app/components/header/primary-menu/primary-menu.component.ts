import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-menu',
  styleUrls: ['./primary-menu.component.scss'],
  template: `
    <nav class="primary-menu">
      <ul class="menu">
        <li class="menu-item"><a [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active" routerLink="/movies">Movies</a></li>
        <li class="menu-item"><a routerLinkActive="active" routerLink="/shows">Tv Shows</a></li>
      </ul>
    </nav>
  `
})
export class PrimaryMenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
