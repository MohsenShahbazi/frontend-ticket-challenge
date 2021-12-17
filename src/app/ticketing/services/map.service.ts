import { Injectable } from '@angular/core';
import {BaseService} from "../../structure/service/base.service";
import {HttpClient} from "@angular/common/http";
import {ResourceService} from "../../structure/service/resource.service";

@Injectable({
  providedIn: 'root'
})
export class MapService extends BaseService{

  constructor(
    private http: HttpClient,
    private resource: ResourceService
  ) {
    super(http, resource);
    this.rout = 'map/'
  }
}
