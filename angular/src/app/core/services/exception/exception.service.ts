import { Injectable } from '@angular/core';
import { Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class ExceptionService {

  constructor() { }

  handleError(error: Response | any, errorCallback?: Function): ErrorObservable {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message || error.toString();
    }
    console.error(errMsg);

    if (errorCallback) {
      errorCallback(error);
    };

    return Observable.throw(errMsg);
  }
}
