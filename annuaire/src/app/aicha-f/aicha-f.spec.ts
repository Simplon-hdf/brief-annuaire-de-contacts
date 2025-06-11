import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AichaF } from './aicha-f';

describe('AichaF', () => {
  let component: AichaF;
  let fixture: ComponentFixture<AichaF>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AichaF]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AichaF);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
