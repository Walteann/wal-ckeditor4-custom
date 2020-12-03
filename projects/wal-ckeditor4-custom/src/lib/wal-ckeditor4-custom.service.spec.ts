import { TestBed } from '@angular/core/testing';

import { WalCkeditor4CustomService } from './wal-ckeditor4-custom.service';

describe('WalCkeditor4CustomService', () => {
  let service: WalCkeditor4CustomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalCkeditor4CustomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
