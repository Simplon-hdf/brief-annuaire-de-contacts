import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobertC } from './robert-c';

describe('RobertC', () => {
  let component: RobertC;
  let fixture: ComponentFixture<RobertC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RobertC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RobertC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
