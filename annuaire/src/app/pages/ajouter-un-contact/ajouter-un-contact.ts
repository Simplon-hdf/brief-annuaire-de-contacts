import { Component } from '@angular/core';
import { FormulaireDeContact } from '../../formulaire-de-contact/formulaire-de-contact';
import { ListeDeContacts } from '../../liste-de-contacts/liste-de-contacts';

@Component({
  selector: 'app-ajouter-un-contact',
  imports: [FormulaireDeContact, ListeDeContacts],
  templateUrl: './ajouter-un-contact.html',
  styleUrl: './ajouter-un-contact.css'
})
export class AjouterUnContact {

}
