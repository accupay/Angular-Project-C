import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-gst',
  templateUrl: './upload-gst.component.html',
  styleUrls: ['./upload-gst.component.scss']
})
export class UploadGstComponent implements OnInit {
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
