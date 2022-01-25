import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMembershipTypeComponent } from './update-membership-type.component';

describe('UpdateMembershipTypeComponent', () => {
  let component: UpdateMembershipTypeComponent;
  let fixture: ComponentFixture<UpdateMembershipTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMembershipTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMembershipTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
