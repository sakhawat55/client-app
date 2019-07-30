import { TestBed } from '@angular/core/testing';

import { ConfirmPasswordValidatorService } from './confirm-password-validator.service';

describe('ConfirmPasswordValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmPasswordValidatorService = TestBed.get(ConfirmPasswordValidatorService);
    expect(service).toBeTruthy();
  });
});
