import { TestBed } from '@angular/core/testing';

import { SubventionsService } from './subventions.service';

describe('SubventionsService', () => {
  let service: SubventionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubventionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
