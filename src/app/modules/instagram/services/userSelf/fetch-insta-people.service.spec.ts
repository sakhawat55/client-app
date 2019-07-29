import {TestBed} from '@angular/core/testing';

import {FetchInstaPeopleService} from './fetch-insta-people.service';
import {config} from '../../../../../../app-config';

describe('FetchInstaPeopleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchInstaPeopleService = TestBed.get(FetchInstaPeopleService);

    expect(service).toBeTruthy();
  });

  describe('config should be correct', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be get correct config', () => {
      const service: FetchInstaPeopleService = TestBed.get(FetchInstaPeopleService);
      const url = service.getUserSelfInfoUrl();

      expect(url).toEqual(config.getEndpoints().userSelfInfo);
    });

  });
});
