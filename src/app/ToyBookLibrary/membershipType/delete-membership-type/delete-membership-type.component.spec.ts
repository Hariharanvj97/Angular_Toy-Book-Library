import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMembershipTypeComponent } from './delete-membership-type.component';

describe('DeleteMembershipTypeComponent', () => {
  let component: DeleteMembershipTypeComponent;
  let fixture: ComponentFixture<DeleteMembershipTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMembershipTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMembershipTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
