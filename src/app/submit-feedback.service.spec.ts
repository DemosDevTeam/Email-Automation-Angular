import { TestBed } from '@angular/core/testing';

import { SubmitFeedbackService } from './submit-feedback.service';

describe('SubmitFeedbackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubmitFeedbackService = TestBed.get(SubmitFeedbackService);
    expect(service).toBeTruthy();
  });
});
