import { TestBed, inject } from '@angular/core/testing';

import { PushService } from './push.service';

describe('PushService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PushService]
    });
  });

  it('should ...', inject([PushService], (service: PushService) => {
    expect(service).toBeTruthy();
  }));
});
