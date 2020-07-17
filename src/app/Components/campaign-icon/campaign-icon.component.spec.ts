import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignIconComponent } from './campaign-icon.component';

describe('CampaignIconComponent', () => {
  let component: CampaignIconComponent;
  let fixture: ComponentFixture<CampaignIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
