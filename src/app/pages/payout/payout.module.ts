import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayoutRoutingModule } from './payout-routing.module';
import { PayoutComponent } from './payout/payout.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { VendorUploadComponent } from './vendor-upload/vendor-upload.component';
import { NgxDropzoneModule } from 'ngx-dropzone';




@NgModule({
  declarations: [PayoutComponent,VendorUploadComponent],
  imports: [
    CommonModule,
    PayoutRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatCardModule,
    NgxDropzoneModule
  ]
})
export class PayoutModule { }
