import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateToyComponent } from './update-toy.component';

describe('UpdateToyComponent', () => {
  let component: UpdateToyComponent;
  let fixture: ComponentFixture<UpdateToyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateToyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateToyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
