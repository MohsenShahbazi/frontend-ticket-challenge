import {Injectable} from '@angular/core';


import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError, TimeoutError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import {CommonService} from '../service/common.service';
import {BaseService} from '../service/base.service';


@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  token: string = '';
  language: any;

  constructor(private baseService: BaseService,
              private commonService: CommonService,
              private translate: TranslateService
  ) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {



    // @ts-ignore
    return next.handle(request).pipe(map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            if (event.status == 200) {
              /*switch (event.body.Status) {
                case 0 : {
                  // old core
                  if (event.body.message.data == undefined || !(event.body.message.data)) {
                    event = event.clone({body: event.body.message});
                    return event;
                  }
                  // new core
                  else {
                    if (event.body.message.total == undefined || event.body.message.total == -1) {
                      event = event.clone({
                        body: event.body.message.data
                      });
                    } else {
                      event = event.clone({
                        body: {listModel: event.body.message.data, total: event.body.message.total}
                      });
                    }
                    return event;
                  }
                  break;
                }
                case 1 : {
                  _.forEach(event.body.message.invalids, (item) => {
                    this.commonService.showErrorMessage(item.message, item['field']);
                  });
                  let data = {
                    error: event.body,
                    headers: event.headers,
                    status: event.body.message.code,
                    statusText: event.body.message.desc,
                    url: event.url
                  };
                  throw new HttpErrorResponse(data);
                  break;
                }
                case 2 : {
                  this.commonService.showErrorMessage(event.body.message.desc, event.body.message.code);
                  let data = {
                    error: event.body,
                    headers: event.headers,
                    status: event.body.message.code,
                    statusText: event.body.message.desc,
                    url: event.url
                  };
                  throw new HttpErrorResponse(data);
                  break;
                }
                default : {
                  return event;
                  break;
                }
              }*/
              return event;
            }
          }
        }
      ),
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 400 : {
            this.commonService.showErrorMessage(this.translate.instant('badRequestMessage').toString(), error.status.toString());
            break;
          }
          case 401 : {
            if (!(error.url.match('logout') || error.url.match('user'))) {
              this.commonService.showErrorMessage(this.translate.instant('unAuthorizeMessage').toString(), error.status.toString());
            }
            break;
          }
          case 403 : {
            this.commonService.showErrorMessage(this.translate.instant('forbidenMessage').toString(), error.status.toString());
            break;
          }
          case 404 : {
            if (error.url.match('logout')) {
              console.error('logout');
            } else {
              this.commonService.showErrorMessage(this.translate.instant('notFoundMessage').toString(), error.status.toString());
            }
            break;
          }
          case 500 : {
            this.commonService.showMessage(this.translate.instant('internalServerMessage').toString(), error.status.toString());
            break;
          }
          case 503 : {
            this.commonService.showMessage(this.translate.instant('methodNotAllowedMessage').toString(), error.status.toString());
            break;
          }
          case 555 : {
            this.commonService.showMessage(error.error.message.desc, error.status.toString());
            break;
          }
          case 0 : {
            if (error.error.message != undefined && error.error.message.invalids != undefined) {
              return throwError(error.error.message.invalids);
            } else {
              if (error.url.match('logout')) {
                console.error('logout');
              } else {
                this.commonService.showMessage(this.translate.instant('internalServerMessage').toString(), null);
              }
            }
            break;
          }
          default : {


            let timeoutError: HttpErrorResponse = error;
            if (timeoutError.name) {
              this.commonService.showMessage('پاسخی از سمت سرور دریافت نشد', null);
            } else if (error.url.match('logout')) {
              console.error('logout');
            } else {
              this.commonService.showMessage(this.translate.instant('internalServerMessage').toString(), error.status.toString());

              //this.authService.logout();
            }
            break;
          }
        }
        return throwError(error);
      }));
  }
}
