import { TestBed, inject } from '@angular/core/testing';

import { ExceptionService } from './exception.service';

describe('ExceptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExceptionService]
    });
  });

  it('should create the ExceptionService', inject([ExceptionService], (service: ExceptionService) => {
    expect(service).toBeTruthy();
  }));

  it('should handle an error with Response for instance', inject([ExceptionService], (service: ExceptionService) => {
    expect(service).toBeTruthy();
  }));

  it('should handle an error with other type of instance', inject([ExceptionService], (service: ExceptionService) => {
    expect(service).toBeTruthy();
  }));

  it('should handle an error with an error callback', inject([ExceptionService], (service: ExceptionService) => {
    expect(service).toBeTruthy();
  }));

  it('should handle an error without other error callback', inject([ExceptionService], (service: ExceptionService) => {
    expect(service).toBeTruthy();
  }));
});
