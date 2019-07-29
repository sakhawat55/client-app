import { TestBed } from '@angular/core/testing';

import { FetchInstaPeopleService } from './fetch-insta-people.service';

describe('FetchInstaPeopleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchInstaPeopleService = TestBed.get(FetchInstaPeopleService);
    expect(service).toBeTruthy();
  });
});
