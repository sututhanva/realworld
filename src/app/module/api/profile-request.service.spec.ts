/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProfileRequestService } from './profile-request.service';

describe('Service: ProfileRequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileRequestService]
    });
  });

  it('should ...', inject([ProfileRequestService], (service: ProfileRequestService) => {
    expect(service).toBeTruthy();
  }));
});
