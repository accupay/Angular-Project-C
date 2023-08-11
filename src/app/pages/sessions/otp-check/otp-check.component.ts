import { Component, HostBinding, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  ResolveEnd,
  ResolveStart,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";
import { SharedAnimations } from "src/app/shared/animations/shared-animations";
import { ResponseInterface } from "src/app/shared/interface/auth.interface";
import { EncrDecrService } from "src/app/shared/services/encr-decr.service";
import { environment } from "src/environments/environment";
import { AuthService } from "../../../shared/services/auth.service";
import { CustomerState } from "../../store/customer/customer.reducer";

interface IOtpCheck {
  email_id: string;
  user_id: string;
  Pancard: string;
}

@Component({
  selector: "app-otp-check",
  templateUrl: "./otp-check.component.html",
  styleUrls: ["./otp-check.component.scss"],
  animations: [SharedAnimations],
})
export class OtpCheckComponent implements OnInit {
  loading: boolean;
  loadingText: string;
  otpCheckForm!: FormGroup;
  user: IOtpCheck;
  returnLoginDate: ResponseInterface;
  loginButtonText = "Continue";
  hideOtpForm = false;
  constructor(
    private auth: AuthService,
    private router: Router,
    private EncrDecr: EncrDecrService,
    private store: Store<CustomerState>
  ) {
    this.user = {} as IOtpCheck;
  }
  @HostBinding("class") classes = "apt-session-page";

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (
        event instanceof RouteConfigLoadStart ||
        event instanceof ResolveStart
      ) {
        this.loadingText = "Loading Dashboard Module...";

        this.loading = true;
      }
      if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
        this.loading = false;
      }
    });
    this.initLoginForm();
  }

  public initLoginForm(): void {
    this.otpCheckForm = new FormGroup({
      email_id: new FormControl(this.user.email_id, [Validators.required]),
      Pancard: new FormControl(this.user.Pancard, [Validators.required]),
      user_id: new FormControl(this.user.user_id, [Validators.required]),
    });
  }

  get email_id() {
    return this.otpCheckForm.get("email_id")!;
  }
  get user_id() {
    return this.otpCheckForm.get("user_id")!;
  }
  get Pancard() {
    return this.otpCheckForm.get("Pancard")!;
  }

  otpCheck() {
    if (this.otpCheckForm.invalid) {
      for (const control of Object.keys(this.otpCheckForm.controls)) {
        this.otpCheckForm.controls[control].markAsTouched();
      }
      return;
    }
    // this.user = this.otpCheckForm.value;

    // var encryptedMobileNo = this.EncrDecr.get(
    //   environment.dataEncrptionCode,
    //   localStorage.getItem("logged_user_id")
    // );
    // var mobile_no = encryptedMobileNo;
    // var local_token_id = localStorage.getItem("token_id");
    // var session_id = localStorage.getItem("session_id");
    // const authCheckParam = {
    //   account_type: environment.account_type_ref_id,
    //   token_id: local_token_id,
    //   otp: this.user.apt_otp,
    //   session_id: session_id,
    //   mobile_no: mobile_no,
    // };

    // this.auth
    //   .authOtpCheck(authCheckParam)
    //   .pipe(
    //     map((res: ResponseInterface) => {
    //       if (res.response_code === "200") {
    //         this.loading = true;
    //         this.loadingText = "Sigining in...";
    //         setTimeout(() => {
    //           this.router.navigate(["/home"]);
    //         }, 500);
    //         localStorage.setItem("token_id", res?.data?.token_id);
    //         localStorage.setItem("session_id", res?.data?.session_id);
    //         localStorage.setItem("sid", res?.data?.sid);
    //       }
    //     }),
    //     mergeMap((user) =>
    //       this.auth.doLoginLookUp({
    //         mobile_number: "9566013266",
    //         account_type_refid: "2",
    //       })
    //     )
    //   )
    //   .subscribe(
    //     (userData: any) => {
    //       sessionStorage.setItem(
    //         environment.retailerDatakey,
    //         this.EncrDecr.encryptJson(userData?.data)
    //       );
    //     },
    //     (err) => {}
    //   );
  }

  showapt_otp() {
    var x: any = document.getElementById("apt_otp");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
}
