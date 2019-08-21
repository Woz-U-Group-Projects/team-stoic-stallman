import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSlickComponent } from './ng-slick.component';

describe('NgSlickComponent', () => {
  let component: NgSlickComponent;
  let fixture: ComponentFixture<NgSlickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSlickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSlickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
