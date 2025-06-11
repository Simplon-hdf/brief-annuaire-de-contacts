import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LouiseF } from './louise-f';

describe('LouiseF', () => {
  let component: LouiseF;
  let fixture: ComponentFixture<LouiseF>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LouiseF]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LouiseF);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
