import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNowPlayingListScrollableComponent } from './movie-now-playing-list-scrollable.component';

describe('MovieNowPlayingComponent', () => {
  let component: MovieNowPlayingListScrollableComponent;
  let fixture: ComponentFixture<MovieNowPlayingListScrollableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieNowPlayingListScrollableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieNowPlayingListScrollableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
