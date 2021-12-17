import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'pageNotFound', component: PagenotfoundComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
