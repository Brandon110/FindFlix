import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { NavMenusState } from '@app/shared/models/NavMenusState';

@Injectable({
  providedIn: 'root'
})
export class NavMenusService {
  private navMenusState = new Subject<NavMenusState>();

  constructor() {}

  navMenusInit(): Observable<NavMenusState> {
    return this.navMenusState.asObservable();
  }

  showNavMenu(): void {
    this.navMenusState.next(<NavMenusState>{ show: true });
  }

  hideNavMenu(): void {
    this.navMenusState.next(<NavMenusState>{ show: false });
  }
}
