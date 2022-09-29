import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTopUpComponent } from './online-top-up.component';

describe('OnlineTopUpComponent', () => {
  let component: OnlineTopUpComponent;
  let fixture: ComponentFixture<OnlineTopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineTopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineTopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
