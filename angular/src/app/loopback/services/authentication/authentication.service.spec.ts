import { TestBed, inject } from '@angular/core/testing';
import { CookieModule } from 'ngx-cookie';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CookieModule.forRoot()
      ],
      providers: [
        AuthenticationService
      ]
    });
  });

  it('should create AuthenticationService', inject([
    AuthenticationService
  ], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
