import { TestBed } from '@angular/core/testing';

import { CreateSubscriberService } from './create-subscriber.service';

describe('CreateSubscriberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateSubscriberService = TestBed.get(CreateSubscriberService);
    expect(service).toBeTruthy();
  });
});
