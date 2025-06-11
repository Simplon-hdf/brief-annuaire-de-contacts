import { Component, inject } from '@angular/core';
import {ContactService} from '../contact';

@Component({
  selector: 'app-liste-de-contacts',
  standalone: true,
  imports: [],
  templateUrl: './liste-de-contacts.html',
  styleUrl: './liste-de-contacts.css'
})
export class ListeDeContacts {
  private contactService = inject(ContactService);
  contacts = this.contactService.contacts; 
}
