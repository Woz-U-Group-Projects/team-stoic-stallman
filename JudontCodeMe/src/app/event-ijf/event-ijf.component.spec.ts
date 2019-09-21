import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventIjfComponent } from './event-ijf.component';

describe('EventIjfComponent', () => {
  let component: EventIjfComponent;
  let fixture: ComponentFixture<EventIjfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventIjfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventIjfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
