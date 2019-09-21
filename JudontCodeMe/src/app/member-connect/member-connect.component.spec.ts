import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberConnectComponent } from './member-connect.component';

describe('MemberConnectComponent', () => {
  let component: MemberConnectComponent;
  let fixture: ComponentFixture<MemberConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
