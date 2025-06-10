import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ContactService, ModeleDeContact} from '../contact';
import {CardClient} from '../card-client/card-client';
import { format } from 'path';

@Component({
  selector: 'app-formulaire-de-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulaire-de-contact.html',
  styleUrl: './formulaire-de-contact.css'
})
export class FormulaireDeContact {

  cardClients: CardClient[] = [];

profilContact: FormGroup = new FormGroup({
  nom: new FormControl('', [Validators.required, Validators.maxLength(50)]),
  poste: new FormControl('', [Validators.required]),
  typeDeContact: new FormControl('', [Validators.required]),
  description: new FormControl(''),
  email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
  telephone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
  photoUrl: new FormControl('', [Validators.required])
  });

  constructor(private contactService: ContactService) {}


onSubmit(): void { 
if (this.profilContact.valid) {
  console.log('Form Data', this.profilContact.value);
  

    const newContact: ModeleDeContact = {
      id: Date.now(), // Simple ID generation
      nom: this.profilContact.value.nom,
      poste: this.profilContact.value.poste,
      typeDeContact: this.profilContact.value.typeDeContact,
      description: this.profilContact.value.description,
      email: this.profilContact.value.email,
      telephone: this.profilContact.value.telephone,
      photoUrl: this.profilContact.value.photoUrl,
      
    };
//ajouter distinction entre client et fournisseur
const newCardClient = new CardClient();
this.cardClients.push(newCardClient);
this.contactService.addContact(newContact);
this.profilContact.reset();
console.log('Nouveau contact ajouté', newCardClient);
}
}

}

getCardClients(): CardClient[] {
  return this.cardClients;

}