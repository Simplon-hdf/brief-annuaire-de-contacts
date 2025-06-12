// contact-service.ts
import { Injectable, signal } from '@angular/core';
import { ContactCommun, TypeDeContact } from '../contact';

@Injectable({
  providedIn: 'root'  // Permet d’injecter ce service partout (singleton)
})
export class ContactService {
  // Signal pour stocker la liste des contacts
  private contactsSignal = signal<ContactCommun[]>([]);

  // Expose le signal en lecture seule pour éviter des modifications extérieures directes
  get contacts() {
    return this.contactsSignal.asReadonly();
  }

  // Ajouter un contact dans la liste
  ajouter(contact: ContactCommun) {
    this.contactsSignal.update(contacts => [...contacts, contact]);
  }

  // Récupérer un contact par son ID
  getContactById(id: number): ContactCommun | undefined {
    return this.contactsSignal().find(contact => contact.id === id);
  }

  // Filtrer les contacts par type "Client"
  getClients(): ContactCommun[] {
    return this.contactsSignal().filter(c => c.typeDeContact === 'Client');
  }

  // Filtrer les contacts par type "Fournisseur"
  getFournisseurs(): ContactCommun[] {
    return this.contactsSignal().filter(c => c.typeDeContact === 'Fournisseur');
  }
}
