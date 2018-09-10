import { TestBed, inject } from '@angular/core/testing';

import { EventItemService } from './event-item.service';

describe('EventItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventItemService]
    });
  });

  it('should be created', inject([EventItemService], (service: EventItemService) => {
    expect(service).toBeTruthy();
  }));
});
