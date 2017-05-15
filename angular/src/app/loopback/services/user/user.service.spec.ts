import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { CookieModule } from 'ngx-cookie';

import { UserService } from './user.service';
import { ExceptionService } from 'app/core/services';
import { AuthenticationService } from '../authentication/authentication.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        CookieModule.forRoot()
      ],
      providers: [
        ExceptionService,
        UserService,
        AuthenticationService
      ]
    });
  });

  it('should create UserService', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
