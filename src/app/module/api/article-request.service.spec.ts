/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArticleRequestService } from './article-request.service';

describe('Service: ArticleRequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleRequestService]
    });
  });

  it('should ...', inject([ArticleRequestService], (service: ArticleRequestService) => {
    expect(service).toBeTruthy();
  }));
});
