import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorUploadComponent } from './vendor-upload.component';

describe('VendorUploadComponent', () => {
  let component: VendorUploadComponent;
  let fixture: ComponentFixture<VendorUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
