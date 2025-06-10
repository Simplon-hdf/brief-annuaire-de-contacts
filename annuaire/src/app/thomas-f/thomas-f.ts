import { Component } from '@angular/core';

@Component({
  selector: 'app-thomas-f',
  imports: [],
  templateUrl: './thomas-f.html',
  styleUrl: './thomas-f.css'
})
export class ThomasF {
nom: string = 'Thomas Dubois';
poste: string = 'Responsable Partenariats';
description: string = 'Fournisseur de licences logicielles et outils de développement, offre des tarifs préférentiels.';
email: string = 'thomas.dubois@example.com';
telephone: string = '07 89 45 67 23';
photoUrl: string = 'thomas.jpg';
}
