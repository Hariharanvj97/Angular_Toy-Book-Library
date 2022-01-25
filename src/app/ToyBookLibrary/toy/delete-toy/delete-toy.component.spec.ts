import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteToyComponent } from './delete-toy.component';

describe('DeleteToyComponent', () => {
  let component: DeleteToyComponent;
  let fixture: ComponentFixture<DeleteToyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteToyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteToyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
