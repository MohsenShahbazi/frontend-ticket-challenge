import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {ContactComponent} from "./page/contact/contact.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'pageNotFound', component: PagenotfoundComponent },
  {
    path: 'page',
    loadChildren: () => import('./page/page.module')
      .then(m => m.PageModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
