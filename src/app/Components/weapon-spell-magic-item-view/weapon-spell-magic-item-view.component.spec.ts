import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponSpellMagicItemViewComponent } from './weapon-spell-magic-item-view.component';

describe('WeaponSpellMagicItemViewComponent', () => {
  let component: WeaponSpellMagicItemViewComponent;
  let fixture: ComponentFixture<WeaponSpellMagicItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponSpellMagicItemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponSpellMagicItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
