import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventUsjaComponent } from './event-usja.component';

describe('EventUsjaComponent', () => {
  let component: EventUsjaComponent;
  let fixture: ComponentFixture<EventUsjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventUsjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventUsjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
