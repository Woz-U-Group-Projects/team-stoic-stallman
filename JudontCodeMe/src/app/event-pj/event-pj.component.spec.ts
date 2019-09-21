import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPjComponent } from './event-pj.component';

describe('EventPjComponent', () => {
  let component: EventPjComponent;
  let fixture: ComponentFixture<EventPjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
