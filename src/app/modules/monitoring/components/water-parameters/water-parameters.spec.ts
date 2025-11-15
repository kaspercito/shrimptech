import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterParameters } from './water-parameters';

describe('WaterParameters', () => {
  let component: WaterParameters;
  let fixture: ComponentFixture<WaterParameters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterParameters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterParameters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
