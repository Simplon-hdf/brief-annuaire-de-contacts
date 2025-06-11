import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDeContacts } from './liste-de-contacts';

describe('ListeDeContacts', () => {
  let component: ListeDeContacts;
  let fixture: ComponentFixture<ListeDeContacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeDeContacts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDeContacts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
