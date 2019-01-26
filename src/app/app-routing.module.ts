import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { DetailsComponent } from "./details/details.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  { path: "", redirectTo: '/dashboard', pathMatch: 'full' },
  { path: "details/:id", component: DetailsComponent },
  { path: "edit/:id", component: EditComponent },
  { path: "dashboard", component: DashboardComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }