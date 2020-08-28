import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpellSlotsComponent } from './edit-spell-slots.component';

describe('EditSpellSlotsComponent', () => {
  let component: EditSpellSlotsComponent;
  let fixture: ComponentFixture<EditSpellSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSpellSlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSpellSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
