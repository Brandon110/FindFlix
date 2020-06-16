import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieUpcomingListScrollableComponent } from './movie-upcoming-list-scrollable.component';

describe('MovieUpcomingComponent', () => {
  let component: MovieUpcomingListScrollableComponent;
  let fixture: ComponentFixture<MovieUpcomingListScrollableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieUpcomingListScrollableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieUpcomingListScrollableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
