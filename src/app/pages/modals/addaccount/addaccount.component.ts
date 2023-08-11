import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.scss']
})
export class AddaccountComponent implements OnInit {
  customerDetail: any;
  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit() {
    console.log("customerDetail", this.customerDetail);
  }

  close() {
    this.activeModal.close();
  }

  accept() {
    this.activeModal.close();
  }
}
