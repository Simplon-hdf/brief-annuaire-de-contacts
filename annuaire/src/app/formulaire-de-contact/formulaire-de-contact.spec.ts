import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDeContact } from './formulaire-de-contact';

describe('FormulaireDeContact', () => {
  let component: FormulaireDeContact;
  let fixture: ComponentFixture<FormulaireDeContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireDeContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireDeContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
