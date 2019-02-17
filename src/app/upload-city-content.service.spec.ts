import { TestBed } from '@angular/core/testing';

import { UploadCityContentService } from './upload-city-content.service';

describe('UploadCityContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadCityContentService = TestBed.get(UploadCityContentService);
    expect(service).toBeTruthy();
  });
});
