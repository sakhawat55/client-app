import {TestBed} from '@angular/core/testing';

import {FetchAccessTokenOwnerInfoService} from './fetch-access-token-owner-info.service';
import {HttpModule} from '@angular/http';

describe('FetchAccessTokenOwnerInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpModule]
  }));

  it('should be created', () => {
    const service: FetchAccessTokenOwnerInfoService = TestBed.get(FetchAccessTokenOwnerInfoService);

    expect(service).toBeTruthy();
  });
});
