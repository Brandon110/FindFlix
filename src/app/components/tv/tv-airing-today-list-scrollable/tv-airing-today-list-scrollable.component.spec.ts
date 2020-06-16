import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvAiringTodayListScrollableComponent } from './tv-airing-today-list-scrollable.component';

describe('TvAiringTodayComponent', () => {
  let component: TvAiringTodayListScrollableComponent;
  let fixture: ComponentFixture<TvAiringTodayListScrollableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvAiringTodayListScrollableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvAiringTodayListScrollableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
