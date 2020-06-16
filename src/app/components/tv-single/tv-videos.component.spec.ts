import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvVideosComponent } from './tv-videos.component';

describe('TvVideosComponent', () => {
  let component: TvVideosComponent;
  let fixture: ComponentFixture<TvVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvVideosComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
