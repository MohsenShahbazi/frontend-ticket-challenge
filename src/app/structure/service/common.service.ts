import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {ToastrService} from 'ngx-toastr';

@Injectable(
  {
    providedIn: 'root',
  }
)
export class  CommonService {

  constructor(private http: HttpClient, private toasts : ToastrService) {
  }

  isShowLoadingBar: boolean = false;

  showInfoMessage(message: string | undefined, title: string | undefined) {
    this.toasts.info(message,title);
    return;
  }

  showErrorMessage(message: string | undefined, title: string | undefined) {
    this.toasts.error(message,title);
    return;
  }

  showMessage(message: string , title: string ) {
    this.toasts.show(message,title);
    return;
  }

  showLoadingBar(isShow: boolean) {
    this.isShowLoadingBar = isShow;
  }
}
