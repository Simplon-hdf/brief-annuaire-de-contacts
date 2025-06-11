import { Component } from '@angular/core';

@Component({
  selector: 'app-louise-f',
  imports: [],
  templateUrl: './louise-f.html',
  styleUrl: './louise-f.css'
})
export class LouiseF {
  nom: string = 'Louise Roux';
  poste: string = 'Account Manager';
  description: string = 'Fournisseur d\'équipements informatiques et matériel réseau, livraison rapide garantie.';
  email: string = 'louise.roux@tech-equipements.fr';
  telephone: string = '06 93 47 82 15';
  photoUrl: string = 'louise.jpg';
}
