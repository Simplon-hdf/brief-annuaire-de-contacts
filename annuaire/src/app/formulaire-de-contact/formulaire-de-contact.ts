import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulaire-de-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulaire-de-contact.html',
  styleUrls: ['./formulaire-de-contact.css']
})
export class FormulaireDeContact {
  form: FormGroup = new FormGroup({
    nom: new FormControl(''),
    poste: new FormControl('Client'),
    typeDeContact: new FormControl(''),
    description: new FormControl(''),
    email: new FormControl(''),
    telephone: new FormControl(''),
    photoUrl: new FormControl('')
  });

  onSubmit() {
    const contact = this.form.value;
    console.log('Formulaire soumis :', contact);
  }
}