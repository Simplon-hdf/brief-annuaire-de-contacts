import { Component, inject} from '@angular/core';
import { model } from '@angular/core';
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

  nom = model('');
  poste = model('');
  typeDeContact = model<TypeDeContact | ''>('');
  description = model('');
  email = model('');
  telephone = model('');
  photoUrl = model('');
 
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
    console.log(`Nouveau contact ${this.typeDeContact()} ajouté : ${this.nom()}`);
  
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

   