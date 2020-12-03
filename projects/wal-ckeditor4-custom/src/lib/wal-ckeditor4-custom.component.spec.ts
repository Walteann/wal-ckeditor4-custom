import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalCkeditor4CustomComponent } from './wal-ckeditor4-custom.component';

describe('WalCkeditor4CustomComponent', () => {
  let component: WalCkeditor4CustomComponent;
  let fixture: ComponentFixture<WalCkeditor4CustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalCkeditor4CustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalCkeditor4CustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
