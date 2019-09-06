import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAClubComponent } from './find-a-club.component';

describe('FindAClubComponent', () => {
  let component: FindAClubComponent;
  let fixture: ComponentFixture<FindAClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
