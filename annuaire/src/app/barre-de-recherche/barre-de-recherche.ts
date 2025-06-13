import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LolaC } from '../lola-c/lola-c';
import { AichaF } from '../aicha-f/aicha-f';
import { ClaraC } from '../clara-c/clara-c';
import { GeorgeC } from '../george-c/george-c';
import { JeanC } from '../jean-c/jean-c';
import { LouiseF } from '../louise-f/louise-f';
import { MarcF } from '../marc-f/marc-f';
import { PierreF } from '../pierre-f/pierre-f';
import { RobertC } from '../robert-c/robert-c';
import { SarahF } from '../sarah-f/sarah-f';
import { ThomasF } from '../thomas-f/thomas-f';
import { CardClient } from '../card-client/card-client';
import { CarteFournisseurs } from '../carte-fournisseurs/carte-fournisseurs';

@Component({
  selector: 'app-barre-de-recherche',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './barre-de-recherche.html',
  styleUrl: './barre-de-recherche.css'
})
export class BarreDeRecherche {
  elementDeRecherche: string = '';
  selectionTypeDeContact: string = 'Tous';
  
 
  contacts: any[] = [];
  
  constructor() {
    this.initialiserContacts();
  }

  private initialiserContacts(): void {
    
    const clientsComponents = [
      { component: LolaC, type: 'Clients' },
      { component: ClaraC, type: 'Clients' },
      { component: GeorgeC, type: 'Clients' },
      { component: JeanC, type: 'Clients' },
      { component: RobertC, type: 'Clients' }
    ];

    
    const fournisseursComponents = [
      { component: AichaF, type: 'Fournisseurs' },
      { component: LouiseF, type: 'Fournisseurs' },
      { component: MarcF, type: 'Fournisseurs' },
      { component: PierreF, type: 'Fournisseurs' },
      { component: SarahF, type: 'Fournisseurs' },
      { component: ThomasF, type: 'Fournisseurs' }
    ];

    
    const cartesGeneriques = [
      { component: CardClient, type: 'Clients' },
      { component: CarteFournisseurs, type: 'Fournisseurs' }
    ];

   
    [...clientsComponents, ...fournisseursComponents, ...cartesGeneriques].forEach(({ component, type }) => {
      try {
        const instance = new component();
        this.contacts.push({
          nom: instance.nom || 'Nom non défini',
          poste: instance.poste || 'Poste non défini',
          description: instance.description || 'Description non disponible',
          email: instance.email || 'Email non défini',
          telephone: instance.telephone || 'Téléphone non défini',
          photoUrl: instance.photoUrl || '',
          type: type
        });
      } catch (error) {
        console.warn(`Erreur lors de l'initialisation de ${component.name}:`, error);
      }
    });
  }
  
  resultatsAffiches: any[] = [];
  afficherResultats: boolean = false;

  
  rechercherEnTempsReel(): void {
    if (this.elementDeRecherche.trim() === '') {
      this.resultatsAffiches = [];
      this.afficherResultats = false;
      return;
    }

    const termeRecherche = this.elementDeRecherche.toLowerCase();

    
    let resultats = this.contacts.filter(contact => 
      contact.nom.toLowerCase().includes(termeRecherche) ||
      contact.poste.toLowerCase().includes(termeRecherche) ||
      contact.email.toLowerCase().includes(termeRecherche) ||
      contact.telephone.includes(termeRecherche)
    );

    
    if (this.selectionTypeDeContact !== 'Tous') {
      resultats = resultats.filter(contact => 
        contact.type === this.selectionTypeDeContact
      );
    }

    
    resultats.sort((a, b) => {
      const nomA = a.nom.toLowerCase();
      const nomB = b.nom.toLowerCase();
      
    
      const exactMatchA = nomA === termeRecherche;
      const exactMatchB = nomB === termeRecherche;
      if (exactMatchA && !exactMatchB) return -1;
      if (!exactMatchA && exactMatchB) return 1;
      
      
      const startsWithA = nomA.startsWith(termeRecherche);
      const startsWithB = nomB.startsWith(termeRecherche);
      if (startsWithA && !startsWithB) return -1;
      if (!startsWithA && startsWithB) return 1;
      
      
      const nomMatchA = nomA.includes(termeRecherche);
      const nomMatchB = nomB.includes(termeRecherche);
      if (nomMatchA && !nomMatchB) return -1;
      if (!nomMatchA && nomMatchB) return 1;
      
      
      const indexA = nomA.indexOf(termeRecherche);
      const indexB = nomB.indexOf(termeRecherche);
      if (indexA !== -1 && indexB !== -1 && indexA !== indexB) {
        return indexA - indexB;
      }
      
      