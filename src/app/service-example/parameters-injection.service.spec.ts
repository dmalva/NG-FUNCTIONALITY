import { TestBed } from '@angular/core/testing';

import { ParametersInjectionService } from './parameters-injection.service';

describe('ParametersInjectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParametersInjectionService = TestBed.get(ParametersInjectionService);
    expect(service).toBeTruthy();
  });
});
