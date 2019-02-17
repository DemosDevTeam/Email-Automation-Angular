import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulContentUploadComponent } from './successful-content-upload.component';

describe('SuccessfulContentUploadComponent', () => {
  let component: SuccessfulContentUploadComponent;
  let fixture: ComponentFixture<SuccessfulContentUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulContentUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulContentUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
