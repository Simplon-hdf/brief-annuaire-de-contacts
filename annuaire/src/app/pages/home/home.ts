import { Component } from '@angular/core';
import { GeorgeC } from '../../george-c/george-c';
import { CardClient } from '../../card-client/card-client';
import { CarteFournisseurs } from '../../carte-fournisseurs/carte-fournisseurs';
import { BarreDeRecherche } from '../../barre-de-recherche/barre-de-recherche';
import { JeanC } from '../../jean-c/jean-c';
import { RobertC } from '../../robert-c/robert-c';
import { LolaC } from '../../lola-c/lola-c';
import { ClaraC } from '../../clara-c/clara-c';
import { MarcF } from '../../marc-f/marc-f';
import { PierreF } from '../../pierre-f/pierre-f';
import { ThomasF } from '../../thomas-f/thomas-f';
import { SarahF } from '../../sarah-f/sarah-f';
import { AichaF } from '../../aicha-f/aicha-f';
import { LouiseF } from '../../louise-f/louise-f';
import { ListeDeContacts } from '../../liste-de-contacts/liste-de-contacts';
import { FormulaireDeContact } from '../../formulaire-de-contact/formulaire-de-contact';



@Component({
  selector: 'app-home',
  imports: [ListeDeContacts, GeorgeC,CardClient, CarteFournisseurs, BarreDeRecherche, JeanC, RobertC,LolaC,ClaraC, MarcF, PierreF, ThomasF, SarahF, AichaF, LouiseF],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
