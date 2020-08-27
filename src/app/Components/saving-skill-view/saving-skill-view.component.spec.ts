import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingSkillViewComponent } from './saving-skill-view.component';

describe('SavingSkillViewComponent', () => {
  let component: SavingSkillViewComponent;
  let fixture: ComponentFixture<SavingSkillViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingSkillViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingSkillViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
