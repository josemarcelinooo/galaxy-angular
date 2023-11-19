import { TestBed } from '@angular/core/testing';

import { PublicApiListService } from './public-api-list.service';

describe('PublicApiListService', () => {
  let service: PublicApiListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicApiListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
