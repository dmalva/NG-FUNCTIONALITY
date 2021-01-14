import { TestBed } from '@angular/core/testing';

import { OndemandService } from './ondemand.service';

describe('OndemanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OndemandService = TestBed.get(OndemandService);
    expect(service).toBeTruthy();
  });
});
