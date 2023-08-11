import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SessionsRoutingModule } from "./sessions-routing.module";
import { SigninComponent } from "./signin/signin.component";
import { OtpCheckComponent } from "./otp-check/otp-check.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SharedComponentsModule } from "src/app/shared/components/shared-components.module";
import { SharedDirectivesModule } from "src/app/shared/directives/shared-directives.module";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { NavTitleService } from "src/app/shared/services/nav-title.service";
import { UserLoopUpService } from "src/app/shared/services/user-detail.service";
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatPaginatorModule } from "@angular/material/paginator";
import { LoginComponent } from "./login/login.component";
import { MatMenuModule } from "@angular/material/menu";
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    SessionsRoutingModule,
    SharedDirectivesModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule,
    MatPaginatorModule,
    SharedComponentsModule,
    NgbModule,

    FormsModule,
    ReactiveFormsModule,
 
    MatInputModule,
    MatFormFieldModule,
  ],
  declarations: [SigninComponent, OtpCheckComponent, ForgotPasswordComponent,LoginComponent],
  providers: [NavTitleService, UserLoopUpService],
})
export class SessionsModule {}
