import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildloginComponent } from './childlogin.component';

describe('ChildloginComponent', () => {
  let component: ChildloginComponent;
  let fixture: ComponentFixture<ChildloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
