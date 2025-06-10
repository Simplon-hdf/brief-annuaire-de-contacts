import { Component } from '@angular/core';

@Component({
  selector: 'app-george-c',
  imports: [],
  templateUrl: './george-c.html',
  styleUrl: './george-c.css'
})
export class GeorgeC {
  nom: string = 'George Lefèvre';
  poste: string = 'Directeur Général';
  description: string = 'Décideur clé depuis 2020, engagé dans le développement de partenariats stratégiques avec notre entreprise.';
  email: string = 'george.lefevre@example.com';
  telephone: string = '07 23 45 67 89';
  photoUrl: string = 'george.jpg';  
}
