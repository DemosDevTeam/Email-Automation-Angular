import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulFeedbackComponent } from './successful-feedback.component';

describe('SuccessfulFeedbackComponent', () => {
  let component: SuccessfulFeedbackComponent;
  let fixture: ComponentFixture<SuccessfulFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
