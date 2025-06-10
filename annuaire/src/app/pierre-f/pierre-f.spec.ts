import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PierreF } from './pierre-f';

describe('PierreF', () => {
  let component: PierreF;
  let fixture: ComponentFixture<PierreF>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PierreF]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PierreF);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
