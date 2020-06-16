import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvTopRatedListScrollableComponent } from './tv-top-rated-list-scrollable.component';

describe('TopRatedComponent', () => {
  let component: TvTopRatedListScrollableComponent;
  let fixture: ComponentFixture<TvTopRatedListScrollableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvTopRatedListScrollableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvTopRatedListScrollableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
