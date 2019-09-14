import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YudanshakaiComponent } from './yudanshakai.component';

describe('YudanshakaiComponent', () => {
  let component: YudanshakaiComponent;
  let fixture: ComponentFixture<YudanshakaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YudanshakaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YudanshakaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
