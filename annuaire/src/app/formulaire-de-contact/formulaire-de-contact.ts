import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulaire-de-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire-de-contact.html',
  styleUrl: './formulaire-de-contact.css'
})
export class FormulaireDeContact {
form: FormGroup = new FormGroup({
  nom: new FormControl(''),
  poste: new FormControl(''),
  typeDeContact: new FormControl(''),
  description: new FormControl(''),
  email: new FormControl(''),
  telephone: new FormControl(''),
  photo: new FormControl('')

});

onSubmit(){

}
}
