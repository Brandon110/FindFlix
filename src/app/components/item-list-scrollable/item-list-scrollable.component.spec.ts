import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListScrollableComponent } from './item-list-scrollable.component';

describe('ItemListScrollableComponent', () => {
  let component: ItemListScrollableComponent;
  let fixture: ComponentFixture<ItemListScrollableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListScrollableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListScrollableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
