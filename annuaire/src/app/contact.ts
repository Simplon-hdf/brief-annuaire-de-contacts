import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type TypeDeContact = 'Client' | 'Fournisseur';
export interface ContactCommun {
  id: number; 
  nom: string;
  poste: string;
  typeDeContact: ""| TypeDeContact;
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
  private readonly apiUrl = 'http://localhost:3000/contacts'; 
  constructor(private http: HttpClient) {}


  get contacts() {
    return this.contactsSignal.asReadonly(); 
  }
  ajouter(contact: ContactCommun) {
    this.contactsSignal.update(contacts => [...contacts, contact]);
  }

  chargerContacts() {
    this.http.get<ContactCommun[]>(this.apiUrl).subscribe({
      next: (data) => this.contactsSignal.set(data),
      error: (err) => console.error('Erreur lors du chargement des contacts :', err)
    });
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
  
