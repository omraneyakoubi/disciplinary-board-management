import { TestBed } from '@angular/core/testing';

import { MembreService } from './member.service';

describe('MemberService', () => {
  let service: MembreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
