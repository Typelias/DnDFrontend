import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OPALViewComponent } from './opalview.component';

describe('OPALViewComponent', () => {
  let component: OPALViewComponent;
  let fixture: ComponentFixture<OPALViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OPALViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OPALViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
