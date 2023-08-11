import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceGetRoutingModule } from './invoice-get-routing.module';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { InvoiceListComponent } from 'src/app/views/invoice/invoice-list/invoice-list.component';
import { UploadInvoiceComponent } from './upload-invoice/upload-invoice.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';
import {MatDividerModule} from '@angular/material/divider';
import { NavTitleService } from "src/app/shared/services/nav-title.service";
import { MatPaginatorModule } from "@angular/material/paginator";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AddInvoiceComponent,InvoiceListComponent,UploadInvoiceComponent,InvoiceDetailComponent],
  imports: [
    CommonModule,
    InvoiceGetRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxDropzoneModule,
    MatDividerModule,
    MatPaginatorModule,
    RouterModule
 
    
  ],
  providers: [NavTitleService],
})
export class InvoiceGetModule { }
