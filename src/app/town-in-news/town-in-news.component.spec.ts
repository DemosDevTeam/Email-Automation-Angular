import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TownInNewsComponent } from './town-in-news.component';

describe('TownInNewsComponent', () => {
  let component: TownInNewsComponent;
  let fixture: ComponentFixture<TownInNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TownInNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TownInNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
