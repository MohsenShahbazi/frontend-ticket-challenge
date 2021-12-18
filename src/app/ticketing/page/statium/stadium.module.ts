import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StadiumComponent} from "./stadium.component";
import {StadiumRoutingModule} from "./stadium-routing.module";



@NgModule({
  declarations: [StadiumComponent],
  imports: [
    CommonModule,
    StadiumRoutingModule
  ]
})
export class StadiumModule { }
