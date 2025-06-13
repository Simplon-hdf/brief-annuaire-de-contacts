import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GeorgeC } from '../george-c/george-c';
import { CardClient } from '../card-client/card-client';
import { CarteFournisseurs } from '../carte-fournisseurs/carte-fournisseurs';
import { JeanC } from '../jean-c/jean-c';
import { RobertC } from '../robert-c/robert-c';
import { LolaC } from '../lola-c/lola-c';
import { ClaraC } from '../clara-c/clara-c';
import { MarcF } from '../marc-f/marc-f';
import { PierreF } from '../pierre-f/pierre-f';
import { ThomasF } from '../thomas-f/thomas-f';
import { SarahF } from '../sarah-f/sarah-f';
import { AichaF } from '../aicha-f/aicha-f';
import { LouiseF } from '../louise-f/louise-f';
import { ListeDeContacts } from '../liste-de-contacts/liste-de-contacts';
import { FormulaireDeContact } from '../formulaire-de-contact/formulaire-de-contact';

@Component({
  selector: 'app-barre-de-recherche',
  standalone: true,
  imports: [FormsModule, CommonModule, FormulaireDeContact, ListeDeContacts, GeorgeC,CardClient, CarteFournisseurs, JeanC, RobertC,LolaC,ClaraC, MarcF, PierreF, ThomasF, SarahF, AichaF, LouiseF],
  templateUrl: './barre-de-recherche.html',
  styleUrl: './barre-de-recherche.css'
})
export class BarreDeRecherche {
  elementDeRecherche: string = '';
  selectionTypeDeContact: string = 'Tous';

  contacts = [
    { nom: 'Alice Dupont', type: 'Client' },
    { nom: 'Bob Martin', type: 'Fournisseur' },
    { nom: 'Charlie Durand', type: 'Client' },
    { nom: 'Diane Fournier', type: 'Fournisseur' },
  ];

  resultatsFiltres = [...this.contacts];

  commencerRecherche(): void {
    this.resultatsFiltres = this.contacts.filter(contact => {
      const correspondNom = contact.nom.toLowerCase().includes(this.elementDeRecherche.toLowerCase());
      const correspondType = this.selectionTypeDeContact === 'Tous' || contact.type === this.selectionTypeDeContact;
      return correspondNom && correspondType;
    });

    console.log('Résultats :', this.resultatsFiltres);
  }
}
