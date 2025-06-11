import { Component, inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactService} from '../contact';

export type TypeDeContact = 'Client' | 'Fournisseur';

@Component({
  selector: 'app-formulaire-de-contact',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './formulaire-de-contact.html',
  styleUrl: './formulaire-de-contact.css'
})
export class FormulaireDeContact {

  nom = signal('');
  poste = signal('');
  typeDeContact = signal<TypeDeContact | ''>('');
  description = signal('');
  email = signal('');
  telephone = signal('');
  photoUrl = signal('');
 
  contactAjoute = signal<{ nom: string; TypeDeContact: string } | null>(null);
  private contactService = inject(ContactService);

   ajouterContact() {
    const type = this.typeDeContact();
    if (type !== 'Client' && type !== 'Fournisseur') {
      console.error('Type de contact invalide !');
      return;
    }

      const nouveauContact = {
      id: Date.now(),
      nom: this.nom(),
      poste: this.poste(),
      typeDeContact: this.typeDeContact(),
      description: this.description(),
      email: this.email(),
      telephone: this.telephone(),
      photoUrl: this.photoUrl(),
    }

    this.contactService.ajouter(nouveauContact);
    this.contactAjoute.set({ nom: nouveauContact.nom, TypeDeContact: nouveauContact.typeDeContact });  
  
    setTimeout(() => {
      this.contactAjoute.set(null);
    }, 2000);
  }

    reinitialiserFormulaire(){
    this.nom.set('');
    this.poste.set('');
    this.typeDeContact.set('');
    this.description.set('');
    this.email.set('');
    this.telephone.set('');
    this.photoUrl.set('');
    };

onSubmit(){
  this.ajouterContact();
}

  
}

   