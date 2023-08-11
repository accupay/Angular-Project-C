import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayoutComponent } from './payout/payout.component';
import { VendorUploadComponent } from './vendor-upload/vendor-upload.component';

const routes: Routes = [
  {
    path: "",
    component:PayoutComponent,
    data: {
      title: "Resgistration",
      header: "Resgistration",
    },
  },
  {
    path:"payout",
    component:PayoutComponent,
    data: {
      title: "Resgistration",
      header: "Resgistration",
    },
  },
  {
    path:"vendor-upload",
    component:VendorUploadComponent,
    data: {
      title: "Resgistration",
      header: "Resgistration",
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayoutRoutingModule { }
