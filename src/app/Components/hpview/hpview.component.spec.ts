import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HPViewComponent } from './hpview.component';

describe('HPViewComponent', () => {
  let component: HPViewComponent;
  let fixture: ComponentFixture<HPViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HPViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HPViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
