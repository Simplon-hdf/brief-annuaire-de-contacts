import { Component } from '@angular/core';

@Component({
  selector: 'app-pierre-f',
  imports: [],
  templateUrl: './pierre-f.html',
  styleUrl: './pierre-f.css'
})
export class PierreF {
  nom: string = 'Pierre Lefevre';
  poste: string = 'Commercial Senior';
  description: string = 'Fournisseur de mobilier de bureau ergonomique et équipements pour espaces de coworking.';
  email: string = 'pierre.lefevre@bureau-ergo.fr';
  telephone: string = '06 19 57 84 32';
  photoUrl: string = 'pierre.jpg';
}
