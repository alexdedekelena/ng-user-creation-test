import { TestBed } from '@angular/core/testing';

import { UserCreationStateService } from './user-creation-state.service';

describe('UserCreationStateService', () => {
  let service: UserCreationStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCreationStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
