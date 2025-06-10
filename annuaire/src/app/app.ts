import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarreDeRecherche } from './barre-de-recherche/barre-de-recherche';
import { Footer } from './features/footer/footer';
import { Header } from './header/header';
import { FormulaireDeContact } from './formulaire-de-contact/formulaire-de-contact';
import { CardClient } from './card-client/card-client';
import { CarteFournisseurs } from './carte-fournisseurs/carte-fournisseurs';
import { GeorgeC } from "./george-c/george-c";
import { RobertC } from "./robert-c/robert-c";
import { LolaC } from "./lola-c/lola-c";
import { ClaraC } from "./clara-c/clara-c";
import { JeanC } from './jean-c/jean-c';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarreDeRecherche, Header, CardClient, Footer, FormulaireDeContact,CarteFournisseurs, GeorgeC, RobertC, LolaC, ClaraC, JeanC],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'annuaire';
}
