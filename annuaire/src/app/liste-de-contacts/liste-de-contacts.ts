import { Component, inject, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactService, ContactCommun} from '../contact';


@Component({
  selector: 'app-liste-de-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-de-contacts.html',
  styleUrl: './liste-de-contacts.css'
})

export class ListeDeContacts implements OnInit {
  private contactService = inject(ContactService);

  contacts: Signal<ContactCommun[]> = this.contactService.contacts;

  ngOnInit(): void {
      
  }
}
