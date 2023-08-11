import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { UploadInvoiceComponent } from './upload-invoice/upload-invoice.component';
import { InvoiceDetailComponent } from './invoice-detail/invoice-detail.component';

const routes: Routes = [
  {
    path: "",
    component:AddInvoiceComponent,
    data:{
      title:"Invoice",
      Headers:"Invoice",
    }
  },
  {
    path: "add-invoice",
    component:AddInvoiceComponent,
    data:{
      title:"Invoice",
      Headers:"Invoice",
    }
  },
  {
    path: "upload-invoice",
    component:UploadInvoiceComponent,
    data:{
      title:"Invoice",
      Headers:"Invoice",
    }
  },
  {
    path: "invoice-list",
    component:InvoiceListComponent,
    data:{
      title:"Invoice",
      Headers:"Invoice",
    }
  },
  {
    path: "invoice-detail",
    component:InvoiceDetailComponent,
    data:{
      title:"Invoice",
      Headers:"Invoice",
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceGetRoutingModule { }
