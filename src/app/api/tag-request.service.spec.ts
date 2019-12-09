/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TagRequestService } from './tag-request.service';

describe('Service: TagRequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagRequestService]
    });
  });

  it('should ...', inject([TagRequestService], (service: TagRequestService) => {
    expect(service).toBeTruthy();
  }));
});
