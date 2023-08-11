import { Component, OnInit } from "@angular/core";
import { NavigationService } from "src/app/shared/services/navigation.service";
import { SearchService } from "src/app/shared/services/search.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EncrDecrService } from "src/app/shared/services/encr-decr.service";
import { environment } from "src/environments/environment";
import { Customer } from "src/app/pages/store/customer/customer.model";
import { Router } from "@angular/router";


import { RetailerProfileComponent } from "src/app/pages/modals/retailer-profile/retailer-profile.component";

@Component({
  selector: "app-header-sidebar-compact",
  templateUrl: "./header-sidebar-compact.component.html",
  styleUrls: ["./header-sidebar-compact.component.scss"],
})
export class HeaderSidebarCompactComponent implements OnInit {
  notifications: any[];
  profileSupport = [];
  retailerRefId = "";
  retailerName = "";

  constructor(
    private navService: NavigationService,
    public searchService: SearchService,
    private modalService: NgbModal,
    private EncrDecr: EncrDecrService,
    private router: Router,

  ) {
    const retailerInfo = this.EncrDecr.decryptJson(
      sessionStorage.getItem(environment.retailerDatakey)
    ) as Customer;
    this.retailerRefId = retailerInfo?.retailer_ref_id;
    this.retailerName = retailerInfo?.retailer_name;
    this.notifications = [
      {
        icon: "i-Speach-Bubble-6",
        title: "New message",
        badge: "3",
        text: "James: Hey! are you busy?",
        time: new Date(),
        status: "primary",
        link: "/chat",
      },
      {
        icon: "i-Receipt-3",
        title: "New order received",
        badge: "$4036",
        text: "1 Headphone, 3 iPhone x",
        time: new Date("11/11/2018"),
        status: "success",
        link: "/tables/full",
      },
      {
        icon: "i-Empty-Box",
        title: "Product out of stock",
        text: "Headphone E67, R98, XL90, Q77",
        time: new Date("11/10/2018"),
        status: "danger",
        link: "/tables/list",
      },
      {
        icon: "i-Data-Power",
        title: "Server up!",
        text: "Server rebooted successfully",
        time: new Date("11/08/2018"),
        status: "success",
        link: "/dashboard/v2",
      },
      {
        icon: "i-Data-Block",
        title: "Server down!",
        badge: "Resolved",
        text: "Region 1: Server crashed!",
        time: new Date("11/06/2018"),
        status: "danger",
        link: "/dashboard/v3",
      },
    ];
  }

  ngOnInit() {}

  toggelSidebar() {
    const state = this.navService.sidebarState;
    state.sidenavOpen = !state.sidenavOpen;
    state.childnavOpen = !state.childnavOpen;
  }

  signout() {
    localStorage .removeItem("sid");
    localStorage.removeItem("session_id");
    localStorage.removeItem("token_id");
    localStorage.removeItem("logged_user_id");
    localStorage.removeItem("atp_c_m_n");
    localStorage.removeItem("atp_c_otp_state");
    sessionStorage.removeItem(environment.retailerDatakey);

    // window.open(this.redirectUrl, '_self');
    // } else {
    this.router.navigate(["/sessions"]);
  }
  profile(flag: any) {
    RetailerProfileComponent
    const modalRef = this.modalService.open(RetailerProfileComponent, {
      ariaLabelledBy: "modal-basic-title",
      centered: true,
      backdrop: "static",
      keyboard: false,
    });
    //modalRef.componentInstance.beneDetail = beneData;
    modalRef.componentInstance.profileSupportData = this.profileSupport;
    modalRef.componentInstance.profileOrSupport = flag;
    modalRef.result.then((result) => {
      if (result) {
      } else {
      }
    });
  }
}
