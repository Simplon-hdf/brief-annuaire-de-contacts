import { Component } from '@angular/core';

@Component({
  selector: 'app-clara-c',
  imports: [],
  templateUrl: './clara-c.html',
  styleUrl: './clara-c.css'
})
export class ClaraC {
  nom: string = 'Clara Martin';
  poste: string = 'Chef de Projet Digital';
  description: string = 'Nouvelle cliente, désireuse d\'explorer nos solutions en développement web et applications mobiles.';
  email: string = 'clara.martin@example.com';
  telephone: string = '06 12 34 56 78';
  photoUrl: string = 'clara.jpg';
}
