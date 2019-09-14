import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindaclubComponent } from './findaclub.component';

describe('FindaclubComponent', () => {
  let component: FindaclubComponent;
  let fixture: ComponentFixture<FindaclubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindaclubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindaclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
