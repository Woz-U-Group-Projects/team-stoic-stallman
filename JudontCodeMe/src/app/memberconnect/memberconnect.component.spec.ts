import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberconnectComponent } from './memberconnect.component';

describe('MemberconnectComponent', () => {
  let component: MemberconnectComponent;
  let fixture: ComponentFixture<MemberconnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberconnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
