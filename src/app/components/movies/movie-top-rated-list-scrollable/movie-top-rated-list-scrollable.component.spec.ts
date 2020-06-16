import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTopRatedListScrollableComponent } from './movie-top-rated-list-scrollable.component';

describe('MovieTopRatedComponent', () => {
  let component: MovieTopRatedListScrollableComponent;
  let fixture: ComponentFixture<MovieTopRatedListScrollableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieTopRatedListScrollableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTopRatedListScrollableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
