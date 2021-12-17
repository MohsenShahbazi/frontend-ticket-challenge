import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ticket-challenge';
  constructor(public translate: TranslateService) {
    this.translate.addLangs([ 'fa']);
    this.translate.setDefaultLang('fa');
    this.translate.use('fa');
  }
}
