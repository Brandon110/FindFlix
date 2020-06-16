import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirDatesComponent } from './air-dates.component';

describe('AirDatesComponent', () => {
  let component: AirDatesComponent;
  let fixture: ComponentFixture<AirDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AirDatesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
