import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GstPaymentRoutingModule } from './gst-payment-routing.module';
import { GstPaymentComponent } from './gst-payment/gst-payment.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { UploadGstComponent } from './upload-gst/upload-gst.component';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [GstPaymentComponent,UploadGstComponent],
  imports: [
    CommonModule,
    GstPaymentRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    NgxDropzoneModule
  ]
})
export class GstPaymentModule { }
