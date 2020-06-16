import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvSingleComponent } from './tv-single.component';

describe('TvSingleComponent', () => {
  let component: TvSingleComponent;
  let fixture: ComponentFixture<TvSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvSingleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
