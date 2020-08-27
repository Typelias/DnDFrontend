import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellItemViewComponent } from './spell-item-view.component';

describe('SpellItemViewComponent', () => {
  let component: SpellItemViewComponent;
  let fixture: ComponentFixture<SpellItemViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellItemViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
