import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminLayoutSidebarLargeComponent } from "./admin-layout-sidebar-large/admin-layout-sidebar-large.component";
import { HeaderSidebarLargeComponent } from "./admin-layout-sidebar-large/header-sidebar-large/header-sidebar-large.component";
import { AdminLayoutSidebarCompactComponent } from "./admin-layout-sidebar-compact/admin-layout-sidebar-compact.component";
import { AuthLayoutComponent } from "./auth-layout/auth-layout.component";
import { BlankLayoutComponent } from "./blank-layout/blank-layout.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { SharedPipesModule } from "../../pipes/shared-pipes.module";
import { SearchModule } from "../search/search.module";
import { SidebarLargeComponent } from "./admin-layout-sidebar-large/sidebar-large/sidebar-large.component";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { SidebarCompactComponent } from "./admin-layout-sidebar-compact/sidebar-compact/sidebar-compact.component";
import { HeaderSidebarCompactComponent } from "./admin-layout-sidebar-compact/header-sidebar-compact/header-sidebar-compact.component";
import { FooterComponent } from "../footer/footer.component";
import { CustomizerComponent } from "../customizer/customizer.component";
import { SharedDirectivesModule } from "../../directives/shared-directives.module";
import { FormsModule } from "@angular/forms";
import { NavTitleService } from "../../services/nav-title.service";
import { UserLoopUpService } from "../../services/user-detail.service";
import { NgxUiLoaderModule } from "ngx-ui-loader";
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatExpansionModule } from "@angular/material/expansion";

const components = [
  HeaderSidebarCompactComponent,
  HeaderSidebarLargeComponent,
  SidebarLargeComponent,
  SidebarCompactComponent,
  FooterComponent,
  CustomizerComponent,
  AdminLayoutSidebarLargeComponent,
  AdminLayoutSidebarCompactComponent,
  AuthLayoutComponent,
  BlankLayoutComponent,
 
];

@NgModule({
  imports: [
    NgbModule,
    RouterModule,
    FormsModule,
    SearchModule,
    SharedPipesModule,
    SharedDirectivesModule,
    PerfectScrollbarModule,
    CommonModule,
    NgxUiLoaderModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatExpansionModule,

  ],
  providers: [NavTitleService, UserLoopUpService],
  declarations: components,
  exports: components,
})
export class LayoutsModule {}
