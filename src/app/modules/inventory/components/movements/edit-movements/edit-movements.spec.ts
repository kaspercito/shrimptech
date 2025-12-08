import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMovements } from './edit-movements';

describe('EditMovements', () => {
  let component: EditMovements;
  let fixture: ComponentFixture<EditMovements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMovements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMovements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
