import {TestBed} from '@angular/core/testing';

import {FetchAccessTokenOwnerInfoService} from './fetch-access-token-owner-info.service';

describe('FetchAccessTokenOwnerInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchAccessTokenOwnerInfoService = TestBed.get(FetchAccessTokenOwnerInfoService);

    expect(service).toBeTruthy();
  });
});
