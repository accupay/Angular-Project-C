import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AuthLayoutComponent } from "./shared/components/layouts/auth-layout/auth-layout.component";
import { AuthGaurd } from "./shared/services/auth.gaurd";
import { BlankLayoutComponent } from "./shared/components/layouts/blank-layout/blank-layout.component";
import { AdminLayoutSidebarCompactComponent } from "./shared/components/layouts/admin-layout-sidebar-compact/admin-layout-sidebar-compact.component";
import { AdminLayoutSidebarLargeComponent } from "./shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component";

const adminRoutes: Routes = [
  {
    path: "home",
    canActivate: [AuthGaurd],
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomeModule),
  },
  
  {
    path: "invoice-get",
    canActivate: [AuthGaurd],
    loadChildren: () =>
      import("./pages/invoice-get/invoice-get.module").then(
        (m) => m.InvoiceGetModule
      ),
  },
  
  {
    path: "payout",
    canActivate: [AuthGaurd],
    loadChildren: () =>
      import("./pages/payout/payout.module").then((m) => m.PayoutModule),
  },
  {
    path: "gst-payment",
    canActivate: [AuthGaurd],
    loadChildren: () =>
      import("./pages/gst-payment/gst-payment.module").then((m) => m.GstPaymentModule),
  },
  // {
  //   path: "pg-link",
  //   canActivate: [AuthGaurd],
  //   loadChildren: () =>
  //     import("./pages/pg-link/pg-link.module").then((m) => m.PgLinkModule),
  // },
  //   {
  //     path: "reports",
  //     canActivate: [AuthGaurd],
  //     loadChildren: () =>
  //       import("./pages/reports/reports.module").then((m) => m.ReportsModule),
  //   },
  {
    path: "**",
    redirectTo: "others/404",
  },
];

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      { 
        path: "sessions",
        canActivate: [AuthGaurd],
        loadChildren: () =>
          import("./pages/sessions/sessions.module").then(
            (m) => m.SessionsModule
          ),
      },
    ],
  },
  {
    path: "",
    component: BlankLayoutComponent,
    children: [
      {
        path: "others",
        loadChildren: () =>
          import("./views/others/others.module").then((m) => m.OthersModule),
      },
    ],
  },
  {
    path: "",
    component: AdminLayoutSidebarCompactComponent,
    canActivate: [AuthGaurd],
    children: adminRoutes,
  },
  {
    path: "**",
    redirectTo: "others/404",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
