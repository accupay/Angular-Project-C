import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-invoice',
  templateUrl: './upload-invoice.component.html',
  styleUrls: ['./upload-invoice.component.scss']
})
export class UploadInvoiceComponent implements OnInit {
  files: File[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(event) {
    debugger;
      console.log(event);
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event) {
    debugger;
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
