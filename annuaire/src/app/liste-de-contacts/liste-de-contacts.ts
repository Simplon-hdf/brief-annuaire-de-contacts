import { Component, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactService, ContactCommun} from '../contact/contact-service';


@Component({
  selector: 'app-liste-de-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-de-contacts.html',
  styleUrl: './liste-de-contacts.css'
})

export class ListeDeContacts {
  private contactService = inject(ContactService);
  contacts: Signal<ContactCommun[]> = this.contactService.contacts;

  contact: ContactCommun = {
    id: 0, 
    nom: '',
    poste: '',
    typeDeContact: '',
    description: '',
    email: '',
    telephone: '',
    photoUrl: ''
  };

  onImageError(event: Event) {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = '/avatar.png'; 
  }

  ajouterContact() {
    this.contactService.ajouter(this.contact); 

    this.contact = {
      id: 0,
      nom: '',
      poste: '',
      typeDeContact: '',
      description: '',
      email: '',
      telephone: '',
      photoUrl: ''
    };

    alert('Contact ajouté avec succès');
  }
}
