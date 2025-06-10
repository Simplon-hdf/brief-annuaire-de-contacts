import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-formulaire-de-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulaire-de-contact.html',
  styleUrl: './formulaire-de-contact.css'
})
export class FormulaireDeContact {
form: FormGroup = new FormGroup({
  nom: new FormControl('', [Validators.required]),
  poste: new FormControl('Client', [Validators.required]),
  typeDeContact: new FormControl('', [Validators.required]),
  description: new FormControl(''),
  email: new FormControl('', [Validators.required]),
  telephone: new FormControl('', [Validators.required]),
  photoUrl: new FormControl('', [Validators.required])

});

onSubmit(): void{

}
}
