import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SearchComponent } from "./search/search.component";
import { DetailsComponent } from "./details/details.component";
import { EditComponent } from "./edit/edit.component";
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './can-deactivate/can-deactivate.guard';

const routes: Routes = [
  { path: "details/:id", component: DetailsComponent, data: {animation: 'DetailsPage'} },
  { path: "edit/:id", component: EditComponent , canDeactivate: [CanDeactivateGuard], data: {animation: 'EditPage'}},
  { path: "search/:t", component: SearchComponent, data: {animation: 'SearchPage'}},
  { path: "search", component: SearchComponent, data: {animation: 'SearchPage'}},
  { path: "", redirectTo: '/search', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
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