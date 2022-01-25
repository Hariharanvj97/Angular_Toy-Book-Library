import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMembershipTypeComponent } from './insert-membership-type.component';

describe('InsertMembershipTypeComponent', () => {
  let component: InsertMembershipTypeComponent;
  let fixture: ComponentFixture<InsertMembershipTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertMembershipTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertMembershipTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
