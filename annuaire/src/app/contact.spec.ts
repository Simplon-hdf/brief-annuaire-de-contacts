import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { Contact } from './contact'; 

=======
import { Contact } from '../contact'; 
>>>>>>> 241efed0601c18980ebb2290f461e343da10102a
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
