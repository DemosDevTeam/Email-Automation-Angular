import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulUserCreationComponent } from './successful-user-creation.component';

describe('SuccessfulUserCreationComponent', () => {
  let component: SuccessfulUserCreationComponent;
  let fixture: ComponentFixture<SuccessfulUserCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulUserCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulUserCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
