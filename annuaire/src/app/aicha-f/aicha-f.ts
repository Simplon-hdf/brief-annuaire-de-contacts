import { Component } from '@angular/core';

@Component({
  selector: 'app-aicha-f',
  imports: [],
  templateUrl: './aicha-f.html',
  styleUrl: './aicha-f.css'
})
export class AichaF {
  nom: string = 'Aïcha Benali';
  poste: string = 'Responsable Communication';
  description: string = 'Spécialiste en stratégie digitale et gestion de communautés, passionnée par l\'innovation technologique.';
  email: string = 'aicha.benali@example.com';
  telephone: string = '06 92 15 78 43';
  photoUrl: string = 'aicha.jpg';
}
