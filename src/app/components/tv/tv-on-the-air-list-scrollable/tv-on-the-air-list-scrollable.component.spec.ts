import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvOnTheAirListScrollableComponent } from './tv-on-the-air-list-scrollable.component';

describe('TvOnTheAirComponent', () => {
  let component: TvOnTheAirListScrollableComponent;
  let fixture: ComponentFixture<TvOnTheAirListScrollableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvOnTheAirListScrollableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvOnTheAirListScrollableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
