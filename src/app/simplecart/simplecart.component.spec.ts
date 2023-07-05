import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplecartComponent } from './simplecart.component';

describe('SimplecartComponent', () => {
  let component: SimplecartComponent;
  let fixture: ComponentFixture<SimplecartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimplecartComponent]
    });
    fixture = TestBed.createComponent(SimplecartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
