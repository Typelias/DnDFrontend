import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpellInfoComponent } from './edit-spell-info.component';

describe('EditSpellInfoComponent', () => {
  let component: EditSpellInfoComponent;
  let fixture: ComponentFixture<EditSpellInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSpellInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSpellInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
