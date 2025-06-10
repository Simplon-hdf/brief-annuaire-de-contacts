import { Component } from '@angular/core';

@Component({
  selector: 'app-jean-c',
  imports: [],
  templateUrl: './jean-c.html',
  styleUrl: './jean-c.css'
})
export class JeanC {
  nom: string = 'Jean Dupont';
  poste: string = 'Développeur Full-stack';
  description: string = 'Prospect intéressé par nos formations en cybersécurité et nos solutions d\'intégration de systèmes.';
  email: string = 'jean.dupont@example.com';
  telephone: string = '07 98 76 54 32';
  photoUrl: string = 'jean.jpg';
}
