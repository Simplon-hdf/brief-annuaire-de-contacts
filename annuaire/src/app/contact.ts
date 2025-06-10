import { Injectable } from '@angular/core';
import {CardClient} from './card-client/card-client';
export interface ModeleDeContact {
  id: number;
  nom: string;
  poste: string;
  typeDeContact: 'Client' | 'Fournisseur';
  description: string;
  email: string;
  telephone: string;
  photoUrl: string;
  
}

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private contacts: CardClient[] = [new CardClient()];

  private CardClient: ModeleDeContact[] = [
    {
      id: 1,
      nom: 'Loic Wrobel',
      poste: 'Responsable Achats',
      typeDeContact: 'Client',
      description: 'Client fidèle depuis 2021, intéressé par nos offres B2B.',
      email: 'lolo.wrowro@example.com',
      telephone: '06 12 34 56 78',
      photoUrl: 'loic2.png'
    }
  ];

  getContacts(): ModeleDeContact[] {
    return this.CardClient;
  }
  getContactById(id: number): ModeleDeContact | undefined {
    return this.CardClient.find(contact => contact.id === id);
  }

  addContact(contact: ModeleDeContact): void {
    this.CardClient.push(contact);
  }
  updateContact(id: number, updatedContact: ModeleDeContact): void {
}
}
