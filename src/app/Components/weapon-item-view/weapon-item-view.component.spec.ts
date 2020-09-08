import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponItemViewComponent } from './weapon-item-view.component';

describe('WeaponItemViewComponent', () => {
  let component: WeaponItemViewComponent;
  let fixture: ComponentFixture<WeaponItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponItemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
