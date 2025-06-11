import { Component } from '@angular/core';

@Component({
  selector: 'app-card-client',
  imports: [],
  templateUrl: './card-client.html',
  styleUrl: './card-client.css'
})
export class CardClient {
  nom: string = 'Loïc Wrobel';
  poste: string = 'Responsable Achats';
  typeDeContact: 'Client' | 'Fournisseur' = 'Client';
  description: string = 'Client fidèle depuis 2021, intéressé par nos offres B2B.';
  email: string = 'lolo.wrowro@example.com';
  telephone: string = '06 12 34 56 78';
  photoUrl: string = 'loic2.png'
}
