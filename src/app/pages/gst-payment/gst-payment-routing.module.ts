import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GstPaymentComponent } from './gst-payment/gst-payment.component';
import { UploadGstComponent } from './upload-gst/upload-gst.component';

const routes: Routes = [

  {
    path:"",
    component:GstPaymentComponent,
    data:{
    title: "GST Payments",
      header: "GST Payments",
    }
  },
  {
    path:"upload-gst",
    component:UploadGstComponent,
    data:{
    title: "Upload-GST",
      header: "Upload-GST",
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GstPaymentRoutingModule { }
