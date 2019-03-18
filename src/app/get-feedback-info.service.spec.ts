import { TestBed } from '@angular/core/testing';

import { GetFeedbackInfoService } from './get-feedback-info.service';

describe('GetFeedbackInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFeedbackInfoService = TestBed.get(GetFeedbackInfoService);
    expect(service).toBeTruthy();
  });
});
