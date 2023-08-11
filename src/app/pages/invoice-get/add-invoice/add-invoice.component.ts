import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss']
})
export class AddInvoiceComponent implements OnInit {

  netpay: any;
   selectedFiles: any;
  invoicedate = new Date();
  duedate = new Date();
  maxDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

  payvendor(data){
    debugger;
    console.log("value",data)
    this.netpay = data;
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
}
  
}
