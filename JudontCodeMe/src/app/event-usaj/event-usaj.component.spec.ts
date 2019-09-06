import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventUsajComponent } from './event-usaj.component';

describe('EventUsajComponent', () => {
  let component: EventUsajComponent;
  let fixture: ComponentFixture<EventUsajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventUsajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventUsajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
