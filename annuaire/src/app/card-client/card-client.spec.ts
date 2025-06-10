import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardClient } from './card-client';

describe('CardClient', () => {
  let component: CardClient;
  let fixture: ComponentFixture<CardClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
