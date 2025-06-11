import { Component } from '@angular/core';

@Component({
  selector: 'app-sarah-f',
  imports: [],
  templateUrl: './sarah-f.html',
  styleUrl: './sarah-f.css'
})
export class SarahF {
  nom: string = 'Sarah Lemoine';
  poste: string = 'Responsable Solutions';
  description: string = 'Fournisseur de systèmes de sauvegarde et solutions de récupération de données d\'urgence.';
  email: string = 'sarah.lemoine@backup-solutions.com';
  telephone: string = '07 83 26 94 57';
  photoUrl: string = 'sarah.jpg';
}
