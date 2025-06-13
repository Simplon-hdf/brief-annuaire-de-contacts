import { Component, inject, signal } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ContactService} from '../contact/contact-service';


@Component({
  selector: 'app-formulaire-de-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulaire-de-contact.html',
  styleUrls: ['./formulaire-de-contact.css']
})
export class FormulaireDeContact {
  form: FormGroup = new FormGroup({
    nom: new FormControl('', Validators.required),
    poste: new FormControl('', Validators.required),
    typeDeContact: new FormControl('', Validators.required),
    description: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', [
      Validators.required,
      Validators.pattern('^\\d{10}$')
    ]),
    photoUrl: new FormControl('', Validators.required)
  });

  contactAjoute = signal<{ nom: string; TypeDeContact: string } | null>(null);
  private contactService = inject(ContactService);

  onSubmit() {
    if (this.form.valid) {
      this.ajouterContact();
    } else {
      console.warn('Formulaire invalide');
      this.form.markAllAsTouched();
    }
  }

  ajouterContact() {
    const nouveauContact = {
      id: 0, // Placeholder, real id will be generated in service
      nom: this.form.value.nom,
      poste: this.form.value.poste,
      typeDeContact: this.form.value.typeDeContact,
      description: this.form.value.description,
      email: this.form.value.email,
      telephone: this.form.value.telephone,
      photoUrl: this.form.value.photoUrl
    };

    this.contactService.ajouter(nouveauContact);

    this.contactAjoute.set({
      nom: nouveauContact.nom,
      TypeDeContact: nouveauContact.typeDeContact
    });

    this.form.reset(); // Optionally reset form
  }
}
