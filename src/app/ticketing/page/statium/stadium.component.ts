import {Component, OnInit} from '@angular/core';
import {MapService} from "../../services/map.service";
import {CommonService} from "../../../structure/service/common.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-contact',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.css']
})
export class StadiumComponent implements OnInit {
  seatList: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  count: number = 100;
  mapModel: {};
  //selected seats list
  selectedSeat:Array<number>=new Array<number>();

  constructor(
    private mapService: MapService,
    private commonService: CommonService,
    private translate: TranslateService) {
  }

  ngOnInit(): void {
  }

  //get special map data for show in template for select seats
  getMap(): any {
    this.mapService.get(1).subscribe((info: any) => {
      this.mapModel = info;
    })

  }

  initialStatiumShape(): any {
    var t = document.querySelector('.top');
    var tl = document.querySelector('.top-left');
    var tr = document.querySelector('.top-right');
    var b = document.querySelector('.bottom');
    var bl = document.querySelector('.bottom-left');
    var br = document.querySelector('.bottom-right');
    var sl = document.querySelector('.side-left');
    var sr = document.querySelector('.side-right');
    for (var i = 0; i < 5000; i++) {
      var l = document.createElement('i');
      t.appendChild(l);
      l = document.createElement('i');
      tl.appendChild(l);
      l = document.createElement('i');
      tr.appendChild(l);
      l = document.createElement('i');
      b.appendChild(l);
      l = document.createElement('i');
      bl.appendChild(l);
      l = document.createElement('i');
      br.appendChild(l);
      l = document.createElement('i');
      sl.appendChild(l);
      l = document.createElement('i');
      sr.appendChild(l);
    }
  }

  //add selected seat to list for send to backend
  check(item=null) {
    this.selectedSeat.push(item);
  }

  // reservation method send model to end point for submit user reserve
  reservation(): void {
    // submit ticket reserve with map service
    this.mapService.add(this.selectedSeat).subscribe((info: any) => {
      //after success submit
      this.commonService.showSuccessMessage(
        this.translate.instant('SUCCESS_RESERVE').toString(),
        this.translate.instant('RESERVE_OPERATION').toString());
    })
  }
}
