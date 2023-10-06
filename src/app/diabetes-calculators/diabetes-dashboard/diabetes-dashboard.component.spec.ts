import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesDashboardComponent } from './diabetes-dashboard.component';

describe('DiabetesDashboardComponent', () => {
  let component: DiabetesDashboardComponent;
  let fixture: ComponentFixture<DiabetesDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiabetesDashboardComponent]
    });
    fixture = TestBed.createComponent(DiabetesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
