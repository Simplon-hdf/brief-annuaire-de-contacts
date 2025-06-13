import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUnContact } from './ajouter-un-contact';

describe('AjouterUnContact', () => {
  let component: AjouterUnContact;
  let fixture: ComponentFixture<AjouterUnContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterUnContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterUnContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
