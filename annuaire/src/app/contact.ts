import { Injectable, signal } from '@angular/core';

export type TypeDeContact = 'Client' | 'Fournisseur';
export interface ContactCommun {
  id: number;
  nom: string;
  poste: string;
  typeDeContact: TypeDeContact;
  description: string;
  email: string;
  telephone: string;
  photoUrl: string;
  
}

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private contactsSignal = signal<ContactCommun[]>([]);

  get contacts() {
    return this.contactsSignal.asReadonly(); 
  }
  ajouter(contact: ContactCommun) {
    this.contactsSignal.update(contacts => [...contacts, contact]);
  }
  getContactById(id: number): ContactCommun | undefined {
    return this.contactsSignal().find(contact => contact.id === id);
  }
  getClients(): ContactCommun[] {
    return this.contactsSignal().filter(c => c.typeDeContact === 'Client');
  }

  getFournisseurs(): ContactCommun[] {
    return this.contactsSignal().filter(c => c.typeDeContact === 'Fournisseur');
  }
}
  

