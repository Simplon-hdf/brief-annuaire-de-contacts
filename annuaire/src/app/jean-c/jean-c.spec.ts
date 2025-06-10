import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeanC } from './jean-c';

describe('JeanC', () => {
  let component: JeanC;
  let fixture: ComponentFixture<JeanC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JeanC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeanC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
