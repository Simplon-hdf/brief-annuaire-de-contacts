import { inject, Injectable, signal } from '@angular/core';
import{HttpClient} from '@angular/common/http';


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
  private http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/contacts';
  
  private contactsSignal = signal<ContactCommun[]>([]);
  
  contacts = this.contactsSignal.asReadonly();

  ChargerLesContacts() {
    this.http.get<ContactCommun[]>(this.apiUrl).subscribe({
      next: (contacts) => this.contactsSignal.set(contacts),
      error: (err) => console.error('Erreur de chargement des contacts', err),
    });
  }

  ajouter(contact: ContactCommun) {
    this.http.post<ContactCommun>(this.apiUrl, contact).subscribe({
      next: (nouveau) => {
        this.contactsSignal.update(contacts => [...contacts, nouveau]);
      },
      error: (err) => console.error('Erreur ajout contact', err),
    });
  }

  ChargerParTypeDeContact(type: TypeDeContact): ContactCommun[] {
    return this.contactsSignal().filter(c => c.typeDeContact === type);
  }
}