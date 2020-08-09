import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItemViewComponent } from './category-item-view.component';

describe('CategoryItemViewComponent', () => {
  let component: CategoryItemViewComponent;
  let fixture: ComponentFixture<CategoryItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryItemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
