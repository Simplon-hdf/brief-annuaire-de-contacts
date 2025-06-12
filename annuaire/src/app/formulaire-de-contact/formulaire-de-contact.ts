import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
    poste: new FormControl('Client', Validators.required),
    typeDeContact: new FormControl('', Validators.required),
    description: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', [
      Validators.required,
      Validators.pattern('^\\d{10}$') // exactly 10 digits
    ]),
    photoUrl: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.form.valid) {
      this.ajouterContact();
    } else {
      console.warn('Formulaire invalide');
      this.form.markAllAsTouched();
    }
  }

  ajouterContact() {
    const type = this.form.value.typeDeContact;

    if (type !== 'Client' && type !== 'Fournisseur') {
      console.error('Type de contact invalide !');
      return;
    }

    const nouveauContact = {
      id: Date.now(),
      nom: this.form.value.nom,
      poste: this.form.value.poste,
      typeDeContact: this.form.value.typeDeContact,
      description: this.form.value.description,
      email: this.form.value.email,
      telephone: this.form.value.telephone,
      photoUrl: this.form.value.photoUrl
    };

    console.log('Nouveau contact ajouté :', nouveauContact);
    // Here you'd normally push this to a contacts list or emit it.
  }
}
