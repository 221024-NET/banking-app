import { TestBed } from '@angular/core/testing';

import { SuperserviceService } from './superservice.service';

describe('SuperserviceService', () => {
  let service: SuperserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
