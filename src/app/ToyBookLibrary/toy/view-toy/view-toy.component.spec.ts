import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewToyComponent } from './view-toy.component';

describe('ViewToyComponent', () => {
  let component: ViewToyComponent;
  let fixture: ComponentFixture<ViewToyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewToyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewToyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
