import { Component } from '@angular/core';

@Component({
  selector: 'app-carte-fournisseurs',
  imports: [],
  templateUrl: './carte-fournisseurs.html',
  styleUrl: './carte-fournisseurs.css'
})
export class CarteFournisseurs {
  nom: string = 'Sophie Martin';
  poste: string = 'Responsable Commerciale';
  description: string = 'Fournisseur partenaire depuis 2022 chez FitPro Équipements, spécialisé dans les équipements de sport.';
  email: string = 'sophie.martin@fitpro.com';
  telephone: string = '06 45 32 10 98';
  photoUrl: string = 'sophie-martin.png';
}
