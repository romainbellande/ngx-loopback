import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ExceptionService } from 'app/core/services';
import { LoopbackSettings } from '../../loopback-settings';

@Injectable()
export class AuthenticationService {
  token: string;
  userId: string;

  constructor(private cookieService: CookieService) {
    this.checkCookies();
  }

  checkCookies() {
    const hasToken = !!this.cookieService.get('token');
    const hasUserId = !!this.cookieService.get('userId');
    if (hasToken && hasUserId) {
      this.token = this.cookieService.get('token');
      this.userId = this.cookieService.get('userId');
      return true;
    }
    return false;
  }

  getAuthUrl(url: string) {
    return url + '?access_token=' + this.token;
  }

  setAuth(token: string, userId: string) {
    this.cookieService.put('token', token);
    this.cookieService.put('userId', userId.toString());
    this.token = token;
    this.userId = userId;
  }

  logout() {
    this.cookieService.remove('token');
    this.cookieService.remove('userId');
  }
}
