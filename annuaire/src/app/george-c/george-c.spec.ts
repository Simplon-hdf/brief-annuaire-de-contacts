import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeorgeC } from './george-c';

describe('GeorgeC', () => {
  let component: GeorgeC;
  let fixture: ComponentFixture<GeorgeC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeorgeC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeorgeC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
