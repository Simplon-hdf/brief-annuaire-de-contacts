import { Component, inject, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactService} from '../contact';
import {TypeDeContact} from '../contact';

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

downloadJSON() {
  const contactData = {
    nom: this.nom(),
    poste: this.poste(),
    typeDeContact: this.typeDeContact(),
    description: this.description(),
    email: this.email(),
    telephone: this.telephone(),
    photoUrl: this.photoUrl(),
  };
    const dataStr = JSON.stringify(contactData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `contact-${this.nom() || 'data'}.json`;
    link.click();
}

}