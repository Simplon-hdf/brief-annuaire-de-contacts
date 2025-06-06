import { Injectable } from '@angular/core';

export interface ModeleDeContact {
  id: number;
  nom: string;
  poste: string;
  typeDeContact: 'Client' | 'Fournisseur';
  description: string;
  email: string;
  telephone: string;
  photoUrl: string;
  dateDeCreation?: Date;
  dateDeModification?: Date;
}

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private CardClient = [
    {
      id: 1,
      nom: 'Loic Wrobel',
      poste: 'Responsable Achats',
      description: 'Client fidèle depuis 2021, intéressé par nos offres B2B.',
      email: 'lolo.wrowro@example.com',
      telephone: '06 12 34 56 78',
      photoUrl: 'loic2.png'
    }
  ];

}
