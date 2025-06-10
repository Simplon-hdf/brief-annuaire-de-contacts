import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaraC } from './clara-c';

describe('ClaraC', () => {
  let component: ClaraC;
  let fixture: ComponentFixture<ClaraC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaraC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaraC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
