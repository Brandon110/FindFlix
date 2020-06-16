import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePopularListScrollableComponent } from './movie-popular-list-scrollable.component';

describe('MoviePopularComponent', () => {
  let component: MoviePopularListScrollableComponent;
  let fixture: ComponentFixture<MoviePopularListScrollableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoviePopularListScrollableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePopularListScrollableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
