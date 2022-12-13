import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBtnComponent } from './landing-btn.component';

describe('LandingBtnComponent', () => {
  let component: LandingBtnComponent;
  let fixture: ComponentFixture<LandingBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
