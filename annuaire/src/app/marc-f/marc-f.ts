import { Component } from '@angular/core';

@Component({
  selector: 'app-marc-f',
  imports: [],
  templateUrl: './marc-f.html',
  styleUrl: './marc-f.css'
})
export class MarcF {
  nom: string = 'Marc Dupont';
  poste: string = 'Directeur Technique';
  description: string = 'Fournisseur de services de sécurité informatique et audit cybersécurité, certifié ISO 27001.';
  email: string = 'marc.dupont@securetech-audit.fr';
  telephone: string = '06 45 78 92 13';
  photoUrl: string = 'marc.jpg';
}
