import { Component, inject, model} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactService} from '../contact';


@Component({
  selector: 'app-formulaire-de-contact',
  imports: [CommonModule],
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
    this.contactService.ajouter({
      id: Date.now(), // Utilisation de Date.now() pour générer un ID unique
      nom: this.nom(),
      poste: this.poste(),
      typeDeContact: this.typeDeContact(),
      description: this.description(),
      email: this.email(),
      telephone: this.telephone(),
      photoUrl: this.photoUrl(),
    });

    console.log('Nouveau contact {{this.typeDeContact}} ajouté : {{this.nom}}', nouveauContact);
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

   