import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barre-de-recherche',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './barre-de-recherche.html', 
  styleUrl: './barre-de-recherche.css'
})

export class BarreDeRecherche {
elementDeRecherche: string = '';
selectionTypeDeContact: string = 'Tous';

commencerRecherche(): void {
  console.log('Recherche déclenchée');
  console.log('Terme :', this.elementDeRecherche);
  console.log('Type  :', this.selectionTypeDeContact);
}
}
