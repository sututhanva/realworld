/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataSharedService } from './data-shared.service';

describe('Service: DataShared', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataSharedService]
    });
  });

  it('should ...', inject([DataSharedService], (service: DataSharedService) => {
    expect(service).toBeTruthy();
  }));
});
