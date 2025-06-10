import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ContactService, ModeleDeContact} from '../contact';
import {CardClient} from '../card-client/card-client';
import {CarteFournisseurs} from '../carte-fournisseurs/carte-fournisseurs';

import { format } from 'path';
import { create } from 'domain';

@Component({
  selector: 'app-formulaire-de-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulaire-de-contact.html',
  styleUrl: './formulaire-de-contact.css'
})
export class FormulaireDeContact {


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


  
}
}

}

