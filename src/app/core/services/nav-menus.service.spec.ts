import { TestBed } from '@angular/core/testing';

import { NavMenusService } from './nav-menus.service';

describe('NavMenuService', () => {
  let service: NavMenusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavMenusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
