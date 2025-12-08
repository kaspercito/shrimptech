import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovements } from './add-movements';

describe('AddMovements', () => {
  let component: AddMovements;
  let fixture: ComponentFixture<AddMovements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMovements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMovements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
