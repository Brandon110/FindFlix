import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvOnTheAirComponent } from './tv-on-the-air.component';

describe('TvOnTheAirComponent', () => {
  let component: TvOnTheAirComponent;
  let fixture: ComponentFixture<TvOnTheAirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvOnTheAirComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvOnTheAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
