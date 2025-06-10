import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteFournisseurs } from './carte-fournisseurs';

describe('CarteFournisseurs', () => {
  let component: CarteFournisseurs;
  let fixture: ComponentFixture<CarteFournisseurs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteFournisseurs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteFournisseurs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
