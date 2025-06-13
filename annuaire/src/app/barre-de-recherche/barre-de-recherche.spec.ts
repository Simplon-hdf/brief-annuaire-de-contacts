import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreDeRecherche } from './barre-de-recherche';

describe('BarreDeRecherche', () => {
  let component: BarreDeRecherche;
  let fixture: ComponentFixture<BarreDeRecherche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarreDeRecherche]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarreDeRecherche);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
