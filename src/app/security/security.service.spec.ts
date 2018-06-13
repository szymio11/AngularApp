import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { SecurityService } from './security.service';

describe('SecurityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityService]
    });
  });

  it('should be created', inject([SecurityService], (service: SecurityService) => {
    expect(service).toBeTruthy();
  }));
});
