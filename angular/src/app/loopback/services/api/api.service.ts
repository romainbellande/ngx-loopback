import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { LoopbackSettings } from '../../loopback-settings';
import { ExceptionService } from 'app/core/services';
import { QueryOptions } from 'app/common/models';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export abstract class ApiService {
  headers: Headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
  requestOptions: RequestOptions = new RequestOptions({ headers: this.headers });
  error: Response;
  baseUrl: string = LoopbackSettings.api;
  url: string;

  constructor(
    protected http: Http,
    protected exception: ExceptionService,
    protected authentication: AuthenticationService
  ) {}

  getUrl(options?: QueryOptions) {
    let url = this.baseUrl + this.url;
    if (options) {
      if (options.subUrl) {
        url += options.subUrl;
      }
      if (options.auth) {
        url = this.authentication.getAuthUrl(url);
      }
    }
    return url;
  }

  query<T>(method: number, body: {} | boolean, options?: QueryOptions): Observable<T> {
    this.error = null;
    const url = this.getUrl(options);
    const requestOptions: RequestOptions = this.getRequestOptions(method, url, body, options);
    const request = new Request(requestOptions);

    return this.http.request(request).map((response: Response) => {
      const res = response.json();
      if (options && options.callback) {
        options.callback(res);
      }
      return res;
    })
      .catch((error: Response) => {
        this.error = error;
        return this.exception.handleError(error);
    });
  }

  create<T>(body: {}, options?: QueryOptions): Observable<T> {
    return this.query<T>(RequestMethod.Post, body, options);
  }

  find<T>(options?: {}): Observable<T> {
    return this.query<T>(RequestMethod.Get, false, options);
  }

  findById<T>(id: number, options?: QueryOptions): Observable<T> {
    return this.query<T>(RequestMethod.Get, { id: id }, options);
  }

  getRequestOptions(
    method: number,
    url: string,
    body: {} | boolean,
    _options?: QueryOptions
  ): RequestOptions {
    const options = (_options && _options.request) || this.requestOptions;
    if (body) {
     options.body = JSON.stringify(body);
    }
    if (!options.headers) {
      options.headers = this.headers;
    }
    if (options.withCredentials) {
      options.headers.append('Authorization', this.authentication.token);
    }
    options.method = method;
    options.url = url;
    return options;
  }

  update<T>(body: {}, options?: QueryOptions): Observable<T> {
    return this.query<T>(RequestMethod.Patch, body, options);
  }

  remove<T>(id: number, options?: QueryOptions): Observable<T> {
    return this.query<T>(RequestMethod.Delete, null, options);
  }

  replace<T>(body: {}, options?: QueryOptions): Observable<T> {
    return this.query<T>(RequestMethod.Put, body, options);
  }
}
