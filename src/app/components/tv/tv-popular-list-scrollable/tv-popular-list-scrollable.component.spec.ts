import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvPopularListScrollableComponent } from './tv-popular-list-scrollable.component';

describe('TvPopularComponent', () => {
  let component: TvPopularListScrollableComponent;
  let fixture: ComponentFixture<TvPopularListScrollableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvPopularListScrollableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvPopularListScrollableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
