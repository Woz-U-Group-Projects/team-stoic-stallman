import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventUsjfComponent } from './event-usjf.component';

describe('EventUsjfComponent', () => {
  let component: EventUsjfComponent;
  let fixture: ComponentFixture<EventUsjfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventUsjfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventUsjfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
