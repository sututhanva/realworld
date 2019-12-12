/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserRequestService } from './user-request.service';

describe('Service: UserRequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRequestService]
    });
  });

  it('should ...', inject([UserRequestService], (service: UserRequestService) => {
    expect(service).toBeTruthy();
  }));
});
