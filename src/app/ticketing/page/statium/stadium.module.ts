import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StadiumComponent} from "./stadium.component";
import {StadiumRoutingModule} from "./stadium-routing.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {HttpLoaderFactory} from "../../app.module";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";




@NgModule({
  declarations: [StadiumComponent],
  imports: [
    CommonModule,
    StadiumRoutingModule,
    TranslateModule.forChild(),
  ]
})
export class StadiumModule { }
