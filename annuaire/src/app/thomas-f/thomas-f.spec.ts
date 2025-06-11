import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThomasF } from './thomas-f';

describe('ThomasF', () => {
  let component: ThomasF;
  let fixture: ComponentFixture<ThomasF>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThomasF]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThomasF);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
