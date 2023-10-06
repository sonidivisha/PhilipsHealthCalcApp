import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiDashboardComponent } from './bmi-dashboard.component';

describe('BmiDashboardComponent', () => {
  let component: BmiDashboardComponent;
  let fixture: ComponentFixture<BmiDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BmiDashboardComponent]
    });
    fixture = TestBed.createComponent(BmiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
