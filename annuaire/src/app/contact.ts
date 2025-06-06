import { Injectable } from '@angular/core';

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
