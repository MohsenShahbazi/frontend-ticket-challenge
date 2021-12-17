import {Injectable, isDevMode} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, Subject, BehaviorSubject} from 'rxjs';
import {ResourceService} from "./resource.service";


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private subject = new Subject<any>();
  rout: string;
  private userInfo = new Subject<any>();

  constructor(
    private httpClient: HttpClient,
    private resourceService: ResourceService
  ) {
  }




  add(model): any {
    return this.httpClient.post(this.resourceService.getResourceUrl() + this.rout, model, {});
  }

  update(model): any {
    return this.httpClient.post(this.resourceService.getResourceUrl() + this.rout, model, {});
  }

  delete(id): any {
    let params = new HttpParams().set('id', id);
    return this.httpClient.post(this.resourceService.getResourceUrl() + this.rout, {params: params}, {});
  }

  get(id): any {
    let params = new HttpParams().set('id', id);
    return this.httpClient.get(this.resourceService.getResourceUrl() + this.rout  + id, {params: params});
  }

}
