import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LolaC } from './lola-c';

describe('LolaC', () => {
  let component: LolaC;
  let fixture: ComponentFixture<LolaC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LolaC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LolaC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
