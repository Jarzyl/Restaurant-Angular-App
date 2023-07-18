import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPageComponent } from './reservation-page.component';

describe('ReservationPageComponent', () => {
  let component: ReservationPageComponent;
  let fixture: ComponentFixture<ReservationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationPageComponent]
    });
    fixture = TestBed.createComponent(ReservationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
