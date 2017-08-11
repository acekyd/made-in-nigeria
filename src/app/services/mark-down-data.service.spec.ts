import { TestBed, inject } from '@angular/core/testing';

import { MarkDownDataService } from './mark-down-data.service';

describe('MarkDownDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkDownDataService]
    });
  });

  it('should ...', inject([MarkDownDataService], (service: MarkDownDataService) => {
    expect(service).toBeTruthy();
  }));
});
