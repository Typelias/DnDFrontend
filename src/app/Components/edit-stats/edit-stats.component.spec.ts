import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStatsComponent } from './edit-stats.component';

describe('EditStatsComponent', () => {
  let component: EditStatsComponent;
  let fixture: ComponentFixture<EditStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
