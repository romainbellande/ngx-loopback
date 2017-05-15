import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { CookieModule } from 'ngx-cookie';

import { ApiService } from './api.service';
import { ExceptionService } from 'app/core/services';
import { AuthenticationService } from '../authentication/authentication.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        CookieModule.forRoot()
      ],
      providers: [
        ExceptionService,
        AuthenticationService,
        ApiService
      ]
    });
  });

  it('should create ApiService', inject([
    ExceptionService,
    AuthenticationService,
    ApiService,
  ], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
