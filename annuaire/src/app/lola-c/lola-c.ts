import { Component } from '@angular/core';

@Component({
  selector: 'app-lola-c',
  imports: [],
  templateUrl: './lola-c.html',
  styleUrl: './lola-c.css'
})
export class LolaC {
  nom: string = 'Lola Bernard';
  poste: string = 'Responsable Marketing';
  description: string = 'Cliente depuis 2022, intéressée par nos offres digitales et nos campagnes sur mesure.';
  email: string = 'lola.bernard@example.com';
  telephone: string = '07 65 43 21 09';
  photoUrl: string = 'lola.jpg';
}
