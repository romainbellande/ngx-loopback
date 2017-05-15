import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ExceptionService } from 'app/core/services';
import { QueryOptions } from 'app/common/models';
import { IUserCreate, IAccessToken, IUser } from 'app/common/interfaces';
import { ApiService } from '../api/api.service';

@Injectable()
export class UserService extends ApiService {
  url = '/users';

  create(body: IUserCreate): Observable<IUser> {
    return super.create<IUser>(body);
  }

  login(body: {}): Observable<IAccessToken> {
    const options: QueryOptions = new QueryOptions({ subUrl: '/login' });
    return super.create<IAccessToken>(body, options)
    .map(res => {
      this.authentication.setAuth(res.id, res.userId);
      return res;
    });
  }

  logout() {
    const options: QueryOptions = new QueryOptions({
      subUrl: '/logout',
      request: new RequestOptions({
        withCredentials: true
      })
    });
    return super.create(false, options)
    .map(res => {
      this.authentication.logout();
      return res;
    });
  }
}
