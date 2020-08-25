import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHpComponentComponent } from './edit-hp-component.component';

describe('EditHpComponentComponent', () => {
  let component: EditHpComponentComponent;
  let fixture: ComponentFixture<EditHpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHpComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
