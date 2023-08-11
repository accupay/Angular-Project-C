import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-upload',
  templateUrl: './vendor-upload.component.html',
  styleUrls: ['./vendor-upload.component.scss']
})
export class VendorUploadComponent implements OnInit {
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
