import { TestBed } from '@angular/core/testing';
import { Contact } from '../contact'; src/app/contact.ts

describe('Contact', () => {
  let service: Contact;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Contact);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
