import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarreDeRecherche } from './barre-de-recherche/barre-de-recherche';
import { Header } from './header/header';
import { FormulaireDeContact } from './formulaire-de-contact/formulaire-de-contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarreDeRecherche, Header, FormulaireDeContact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'annuaire';
}
