import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMovements } from './view-movements';

describe('ViewMovements', () => {
  let component: ViewMovements;
  let fixture: ComponentFixture<ViewMovements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMovements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMovements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
