import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupbookingComponent } from './groupbooking.component';

describe('GroupbookingComponent', () => {
  let component: GroupbookingComponent;
  let fixture: ComponentFixture<GroupbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupbookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
