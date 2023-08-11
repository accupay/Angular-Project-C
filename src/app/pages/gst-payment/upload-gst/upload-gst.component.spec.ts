import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadGstComponent } from './upload-gst.component';

describe('UploadGstComponent', () => {
  let component: UploadGstComponent;
  let fixture: ComponentFixture<UploadGstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadGstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadGstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
