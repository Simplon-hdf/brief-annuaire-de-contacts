import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcF } from './marc-f';

describe('MarcF', () => {
  let component: MarcF;
  let fixture: ComponentFixture<MarcF>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcF]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcF);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
