import { HttpClient } from "@angular/common/http";
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

interface IUser {
  user_id: string;
  password: any;
  showPassword: boolean;
  otp: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
  
})
export class LoginComponent implements OnInit {

  loading: boolean;
  loadingText: string;
  signinForm!: FormGroup;
  user: IUser;
  returnLoginDate: ResponseInterface;
  loginButtonText = "Continue";
  hideOtpForm = false;
  mobPattern ="[6-9]{1}[0-9]{9}"
  pwdPattern = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}";
  myImage:string="/src/assets/images/apt-login-wallpaper.jpg"
   res = {
    response_code: "200",
    response_message: "New Session has been created.",
    data: {
        session_id: "10214",
        token_id: "708925",
        sid: "7lcEwfc/XLECJBFns7H1uA=="
    }
  }
  constructor(
    private auth: AuthService,
    private router: Router,
    private store: Store<CustomerState>,
    public http: HttpClient,
    private EncrDecr: EncrDecrService
  ) {
    this.user = {} as IUser;
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
    this.signinForm = new FormGroup({
      user_id: new FormControl("", [
         Validators.required,
        // Validators.minLength(10),
        // Validators.maxLength(10),
        // Validators.pattern(this.mobPattern)
      ]),
      password: new FormControl("", [
        Validators.required,
        //Validators.pattern(this.pwdPattern)
      ]),
      otp: new FormControl(this.user.user_id),
    });
  }
 
  hide = true;
  get mobile_no() {
    return this.signinForm.get("mobile_no")!;
  }
  get passwordInput() {
    return this.signinForm.get("passwordInput")!;
  }
  // get otp() {
  //   return this.signinForm.get("otp")!;
  // }
  public myError = (controlName: string, errorName: string) => {
    return this.signinForm.controls[controlName].hasError(errorName);
  }
  signin() {
    if (this.signinForm.invalid) {
      for (const control of Object.keys(this.signinForm.controls)) {
        this.signinForm.controls[control].markAsTouched();
      }
      return;
    }
    this.user = this.signinForm.value;
    this.loading = true;
    let loginParam = {
      ip: localStorage.getItem("current_ip"),
      mac_id: localStorage.getItem("machineId"),
      password: this.user.password,
      user_id: this.user.user_id,
    };
 
   
    localStorage.setItem("mobile.no",this.user.user_id);
   
    const logres ={
      response_code: "200",
     response_message: "New Session has been created.",
     data: {
         session_id: "10214",
         token_id: "708925",
         sid: "7lcEwfc/XLECJBFns7H1uA=="
     }
    }
      
    if (logres.response_code === "200") { 
          
            // setTimeout(() => this.auth.autoLogout(), 5 * 60000);
            
            this.loadingText = "Sigining in...";
            this.loading = true;
            localStorage.setItem("token_id", logres?.data?.token_id);
            localStorage.setItem("session_id", logres?.data?.session_id);
            localStorage.setItem("sid", logres?.data?.sid);
            this.setSessionUserID();
            setTimeout(() => {
              this.router.navigate(["/home"]);
            }, 500);
            const lookup ={
              data: {
                  response_code: "",
                  response_description: "",
                  account_refid: "1",
                  account_name: "Pavithra",
                  account_company_name: "ABC",
                  account_mobile_no: "9566013266",
                  account_type: "Merchant",
                  source_id: "ACCUPAY001",
                  terminal_id: "ACCUPAY001-001",
                  created_date: "",
                  updated_date: "",
                  sid: "ACCUPAY001-001"
              }
            }
            
            
          
           // Set retailer lookup response to session storage
            sessionStorage.setItem(
              environment.retailerDatakey,
              this.EncrDecr.encryptJson(lookup?.data)
            );
          }
          
        
        
          
          
        else{
        (err) => {
          if (err?.error?.response_code === "101") {
            
            localStorage.setItem("token_id", err?.error?.data.token_id);
            localStorage.setItem("session_id", err?.error?.data.session_id);
            this.setSessionUserID();
            this.loading = false;
          
            this.router.navigate(["/sessions/otp-check"]);
          }
        }
      }
      
      
  }

  setSessionUserID() {
    var encrypted = this.EncrDecr.set(
      environment.dataEncrptionCode,
      this.user.user_id
    );
    localStorage.setItem("logged_user_id", encrypted);
  }

  showPassword() {
    var x: any = document.getElementById("apt_password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
}

