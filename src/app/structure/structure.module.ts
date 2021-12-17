import {NgModule} from '@angular/core';
import {HeaderModule} from '../project/header/header.module';
import {SharedModule} from '../shared.module';
import {CookieModule} from 'ngx-cookie';
import {FooterModule} from '../project/footer/footer.module';
import {BreadcrumbService} from './breadcrumbComponent/breadcrumb.service';
import {RouterModule} from "@angular/router";

@NgModule({
  exports: [
  ],
  imports: [
    SharedModule,
    CookieModule.forRoot(),
    HeaderModule,
    FooterModule,
    RouterModule
  ],
  providers: [
    BreadcrumbService
  ]
})
export class StructureModule {
}
