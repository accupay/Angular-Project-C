import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstPaymentComponent } from './gst-payment.component';

describe('GstPaymentComponent', () => {
  let component: GstPaymentComponent;
  let fixture: ComponentFixture<GstPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GstPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GstPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
