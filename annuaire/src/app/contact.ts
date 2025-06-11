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
  
  
  ajouter(contact: ContactCommun) {
   return this.http.post<ContactCommun>(this.apiUrl, contact);
  }
  getAll() {
    return this.http.get<ContactCommun[]>(this.apiUrl);
  }
 
  getByType(type: TypeDeContact) {
    return this.http.get<ContactCommun[]>(`${this.apiUrl}?typeDeContact=${type}`);
  }
}