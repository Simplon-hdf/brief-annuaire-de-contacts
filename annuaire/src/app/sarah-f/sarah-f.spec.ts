import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarahF } from './sarah-f';

describe('SarahF', () => {
  let component: SarahF;
  let fixture: ComponentFixture<SarahF>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SarahF]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SarahF);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
