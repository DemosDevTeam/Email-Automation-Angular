import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouncilMeetingUpdateComponent } from './council-meeting-update.component';

describe('CouncilMeetingUpdateComponent', () => {
  let component: CouncilMeetingUpdateComponent;
  let fixture: ComponentFixture<CouncilMeetingUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouncilMeetingUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouncilMeetingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
