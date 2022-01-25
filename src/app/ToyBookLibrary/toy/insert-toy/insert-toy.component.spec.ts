import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertToyComponent } from './insert-toy.component';

describe('InsertToyComponent', () => {
  let component: InsertToyComponent;
  let fixture: ComponentFixture<InsertToyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertToyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertToyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
