import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDiscoverComponent } from './movie-discover.component';

describe('MovieDiscoverComponent', () => {
  let component: MovieDiscoverComponent;
  let fixture: ComponentFixture<MovieDiscoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDiscoverComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
